import * as BS from '@browser-search/browser-search';
import { Reducer, useCallback, useContext, useEffect, useReducer } from 'react';
import { Just, Maybe, Nothing } from 'purify-ts/Maybe';
import { isSafari } from 'react-device-detect';

import { BrowserSearchContext } from '../provider';
import * as GenericQueryState from '../queryState';
import { areRequestsEqual } from '../request';
import { buildStateMachine, StateTransition } from '../stateMachine';

type RequestPayload<Document, TFilterId extends string> = BS.Request<Document, TFilterId>
type RunQueryTrigger = 'store-mutation' | 'request-change';

export type SearchResponse<Document, TFilterId extends string = string> = Omit<BS.SearchResponse<Document, TFilterId>, '_cacheStatus_'>;

export interface IdleState extends GenericQueryState.IdleState {
}

export interface LoadingQueryState<Document, TFilterId extends string = string> extends GenericQueryState.LoadingQueryState<RequestPayload<Document, TFilterId>>  {
  abort: BS.AbortSearch;
  trigger: RunQueryTrigger;
}

export interface SuccessQueryState<Document, TFilterId extends string = string> extends GenericQueryState.SuccessQueryState<RequestPayload<Document, TFilterId>, SearchResponse<Document, TFilterId>> {
}

export interface StaleQueryState<Document, TFilterId extends string = string> extends GenericQueryState.StaleQueryState<RequestPayload<Document, TFilterId>, SearchResponse<Document, TFilterId>> {
  abort: BS.AbortSearch;
  trigger: RunQueryTrigger;
  areStatsStale: boolean;
}
export interface ErrorQueryState<Document, TFilterId extends string = string> extends GenericQueryState.ErrorQueryState<RequestPayload<Document, TFilterId>, Error> {
}

export type QueryState<Document, TFilterId extends string = string> = IdleState | LoadingQueryState<Document, TFilterId> | SuccessQueryState<Document, TFilterId> | StaleQueryState<Document, TFilterId> | ErrorQueryState<Document, TFilterId>;


export type SearchStartedAction<Document, TFilterId extends string = string> = { type: 'searchStarted'; request: BS.Request<Document, TFilterId>; abort: BS.AbortSearch, trigger: RunQueryTrigger}
export type SearchCompletedAction<Document, TFilterId extends string = string> = { type: 'searchCompleted'; response: BS.SearchResponse<Document, TFilterId>; request: BS.Request<Document, TFilterId>;}
export type SearchFailedAction<Document, TFilterId extends string = string> = { type: 'searchFailed'; request: BS.Request<Document, TFilterId>; error: Error};

export type Action<Document, TFilterId extends string = string> =
  | SearchStartedAction<Document, TFilterId>
  | SearchCompletedAction<Document, TFilterId>
  | SearchFailedAction<Document, TFilterId>;
  
type QueryReducer<Document, TFilterId extends string = string> = Reducer<QueryState<Document, TFilterId>, Action<Document, TFilterId>>;

const initialState: IdleState = {
  status: 'idle',
  isFetching: false,
};


const fromIdleToLoading = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<LoadingQueryState<Document, TFilterId>> => (
  state.status === 'idle' && action.type === 'searchStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    abort: action.abort,
    isFetching: true,
    trigger: action.trigger
  }) : Nothing
)

const fromLoadingToLoading = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<LoadingQueryState<Document, TFilterId>> => {
  if(state.status === 'loading' && action.type === 'searchStarted') {
    if(getShouldAbortRequest(state.request, action)) {
      state.abort();
    }

    return Just({
      status: 'loading',
      request: action.request,
      abort: action.abort,
      isFetching: true,
      trigger: action.trigger,
    })
  }

  return Nothing;
}

const fromLoadingToError = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<ErrorQueryState<Document, TFilterId>> => (
  state.status === 'loading' && action.type === 'searchFailed' && state.request === action.request ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)


const fromLoadingToSuccess = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<SuccessQueryState<Document, TFilterId>> => (
  state.status === 'loading' && action.type === 'searchCompleted' && state.request === action.request ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

const fromSuccessToStale = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<StaleQueryState<Document, TFilterId>> => (
  state.status === 'success' && action.type === 'searchStarted' ?
  Just({
    status: 'stale',
    request: state.request,
    response: state.response,
    newRequest: action.request,
    abort: action.abort,
    isFetching: true,
    trigger: action.trigger,
    areStatsStale: getAreStatsStale(state.request, action),
  }) : Nothing
)

const fromStaleToSuccess = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<SuccessQueryState<Document, TFilterId>> => (
  state.status === 'stale' && action.type === 'searchCompleted' && state.newRequest === action.request ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

const fromStaleToStale = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<StaleQueryState<Document, TFilterId>> => {
  if(state.status === 'stale' && action.type === 'searchStarted'){
    if(getShouldAbortRequest(state.newRequest, action)) {
      state.abort();
    }

    return Just({
      status: 'stale',
      request: state.request,
      response: state.response,
      newRequest: action.request,
      abort: action.abort,
      isFetching: true,
      trigger: action.trigger,
      areStatsStale: getAreStatsStale(state.request, action),
    })
  }

  return Nothing;
}

const fromStaleToError = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<ErrorQueryState<Document, TFilterId>> => (
  state.status === 'stale' && action.type === 'searchFailed' && state.newRequest === action.request ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)

const fromErrorToLoading = <Document, TFilterId extends string = string>(state: QueryState<Document, TFilterId>, action: Action<Document, TFilterId>): Maybe<LoadingQueryState<Document, TFilterId>> => (
  state.status === 'error' && action.type === 'searchStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    abort: action.abort,
    isFetching: true,
    trigger: action.trigger
  }) : Nothing
)

const getAreStatsStale = <Document, TFilterId extends string>(previousRequest: BS.Request<Document, TFilterId>, searchStartedAction: SearchStartedAction<Document, TFilterId>) => (
  previousRequest.filtersApplied !== searchStartedAction.request.filtersApplied || 
  previousRequest.filterConfig !== searchStartedAction.request.filterConfig ||
  searchStartedAction.trigger === 'store-mutation'
)

const getShouldAbortRequest = <Document, TFilterId extends string>(previousRequest: BS.Request<Document, TFilterId>, searchStartedAction: SearchStartedAction<Document, TFilterId>) => (
  !isSafari && (!areRequestsEqual(previousRequest, searchStartedAction.request) || 
  searchStartedAction.trigger === 'store-mutation')
)

export const buildReducer = <Document, TFilterId extends string = string>(): QueryReducer<Document, TFilterId> => {
  const stateTransitions: StateTransition<QueryState<Document, TFilterId>, Action<Document, TFilterId>>[] = [fromIdleToLoading, fromLoadingToLoading, fromLoadingToError, fromLoadingToSuccess, fromSuccessToStale, fromStaleToStale, fromStaleToSuccess, fromStaleToError, fromErrorToLoading];
  return buildStateMachine(stateTransitions);
}

export const useQuery = <Document, TFilterId extends string = string>(request: BS.Request<Document, TFilterId>): QueryState<Document, TFilterId> => {
  const queryClient = useContext(BrowserSearchContext);
  const [state, dispatch] = useReducer<QueryReducer<Document, TFilterId>>(
    buildReducer<Document, TFilterId>(),
    initialState,
  );

  const runQuery = useCallback( ({trigger}: {trigger: RunQueryTrigger}): void => {
    const requestInstance = {...request};
    const [seachResponsePromise, abortSearch] = queryClient.queryStore(requestInstance);
    dispatch({type: 'searchStarted', request: requestInstance, abort: abortSearch, trigger})

    seachResponsePromise
      .then(searchResponse => {
        dispatch({type: 'searchCompleted', response: searchResponse, request: requestInstance})
      })
      .catch(error => {
        console.log(error, request);
        dispatch({type: 'searchFailed', request: requestInstance, error})
      })
  }, [request, queryClient]);

  useEffect(() => {
    queryClient.subscribeToStoreChange(request.storeId)(runQuery);

    return () => {
      queryClient.unsubscribeToStoreChange(request.storeId)(runQuery);
    };
  }, [request.storeId, queryClient, runQuery]);

  useEffect(() => {
    runQuery({trigger: 'request-change'});
  }, [runQuery]);

  return state;
}
