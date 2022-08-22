import * as BS from '@browser-search/browser-search';
import { Reducer, useCallback, useContext, useEffect, useReducer } from 'react';
import { Just, Maybe, Nothing } from 'purify-ts/Maybe';
import { isSafari } from 'react-device-detect';

import { BrowserSearchContext } from '../provider';
import * as GenericQueryState from '../queryState';
import { areRequestsEqual } from '../queryRequest';
import { buildStateMachine, StateTransition } from '../stateMachine';

type RequestPayload<TDocument, TFilterId extends string> = BS.QueryRequest<TDocument, TFilterId>
type RunQueryTrigger = 'store-mutation' | 'request-change';

export type QueryResponse<TDocument, TFilterId extends string = string> = Omit<BS.QueryResponse<TDocument, TFilterId>, '_cacheStatus_'>;

export interface IdleState extends GenericQueryState.IdleQueryState {
}

export interface LoadingQueryState<TDocument, TFilterId extends string = string> extends GenericQueryState.LoadingQueryState<RequestPayload<TDocument, TFilterId>>  {
  abort: BS.AbortSearch;
  trigger: RunQueryTrigger;
}

export interface SuccessQueryState<TDocument, TFilterId extends string = string> extends GenericQueryState.SuccessQueryState<RequestPayload<TDocument, TFilterId>, QueryResponse<TDocument, TFilterId>> {
}

export interface StaleQueryState<TDocument, TFilterId extends string = string> extends GenericQueryState.StaleQueryState<RequestPayload<TDocument, TFilterId>, QueryResponse<TDocument, TFilterId>> {
  abort: BS.AbortSearch;
  trigger: RunQueryTrigger;
  areStatsStale: boolean;
}
export interface ErrorQueryState<TDocument, TFilterId extends string = string> extends GenericQueryState.ErrorQueryState<RequestPayload<TDocument, TFilterId>, Error> {
}

export type QueryState<TDocument, TFilterId extends string = string> = IdleState | LoadingQueryState<TDocument, TFilterId> | SuccessQueryState<TDocument, TFilterId> | StaleQueryState<TDocument, TFilterId> | ErrorQueryState<TDocument, TFilterId>;


export type SearchStartedAction<TDocument, TFilterId extends string = string> = { type: 'searchStarted'; request: BS.QueryRequest<TDocument, TFilterId>; abort: BS.AbortSearch, trigger: RunQueryTrigger}
export type SearchCompletedAction<TDocument, TFilterId extends string = string> = { type: 'searchCompleted'; response: BS.QueryResponse<TDocument, TFilterId>; request: BS.QueryRequest<TDocument, TFilterId>;}
export type SearchFailedAction<TDocument, TFilterId extends string = string> = { type: 'searchFailed'; request: BS.QueryRequest<TDocument, TFilterId>; error: Error};

export type Action<TDocument, TFilterId extends string = string> =
  | SearchStartedAction<TDocument, TFilterId>
  | SearchCompletedAction<TDocument, TFilterId>
  | SearchFailedAction<TDocument, TFilterId>;
  
type QueryReducer<TDocument, TFilterId extends string = string> = Reducer<QueryState<TDocument, TFilterId>, Action<TDocument, TFilterId>>;

const initialState: IdleState = {
  status: 'idle',
  isFetching: false,
};


const fromIdleToLoading = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<LoadingQueryState<TDocument, TFilterId>> => (
  state.status === 'idle' && action.type === 'searchStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    abort: action.abort,
    isFetching: true,
    trigger: action.trigger
  }) : Nothing
)

const fromLoadingToLoading = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<LoadingQueryState<TDocument, TFilterId>> => {
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

const fromLoadingToError = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<ErrorQueryState<TDocument, TFilterId>> => (
  state.status === 'loading' && action.type === 'searchFailed' && state.request === action.request ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)


const fromLoadingToSuccess = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<SuccessQueryState<TDocument, TFilterId>> => (
  state.status === 'loading' && action.type === 'searchCompleted' && state.request === action.request ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

const fromSuccessToStale = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<StaleQueryState<TDocument, TFilterId>> => (
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

const fromStaleToSuccess = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<SuccessQueryState<TDocument, TFilterId>> => (
  state.status === 'stale' && action.type === 'searchCompleted' && state.newRequest === action.request ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

const fromStaleToStale = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<StaleQueryState<TDocument, TFilterId>> => {
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

const fromStaleToError = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<ErrorQueryState<TDocument, TFilterId>> => (
  state.status === 'stale' && action.type === 'searchFailed' && state.newRequest === action.request ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)

const fromErrorToLoading = <TDocument, TFilterId extends string = string>(state: QueryState<TDocument, TFilterId>, action: Action<TDocument, TFilterId>): Maybe<LoadingQueryState<TDocument, TFilterId>> => (
  state.status === 'error' && action.type === 'searchStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    abort: action.abort,
    isFetching: true,
    trigger: action.trigger
  }) : Nothing
)

const getAreStatsStale = <TDocument, TFilterId extends string>(previousRequest: BS.QueryRequest<TDocument, TFilterId>, searchStartedAction: SearchStartedAction<TDocument, TFilterId>) => (
  previousRequest.filtersApplied !== searchStartedAction.request.filtersApplied || 
  previousRequest.filterConfig !== searchStartedAction.request.filterConfig ||
  searchStartedAction.trigger === 'store-mutation'
)

const getShouldAbortRequest = <TDocument, TFilterId extends string>(previousRequest: BS.QueryRequest<TDocument, TFilterId>, searchStartedAction: SearchStartedAction<TDocument, TFilterId>) => (
  !isSafari && (!areRequestsEqual(previousRequest, searchStartedAction.request) || 
  searchStartedAction.trigger === 'store-mutation')
)

export const buildReducer = <TDocument, TFilterId extends string = string>(): QueryReducer<TDocument, TFilterId> => {
  const stateTransitions: StateTransition<QueryState<TDocument, TFilterId>, Action<TDocument, TFilterId>>[] = [fromIdleToLoading, fromLoadingToLoading, fromLoadingToError, fromLoadingToSuccess, fromSuccessToStale, fromStaleToStale, fromStaleToSuccess, fromStaleToError, fromErrorToLoading];
  return buildStateMachine(stateTransitions);
}

export const useQuery = <TDocument, TFilterId extends string = string>(request: BS.QueryRequest<TDocument, TFilterId>): QueryState<TDocument, TFilterId> => {
  const queryClient = useContext(BrowserSearchContext);
  const [state, dispatch] = useReducer<QueryReducer<TDocument, TFilterId>>(
    buildReducer<TDocument, TFilterId>(),
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
