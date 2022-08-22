import { GetIndexValuesRequest } from '@browser-search/browser-search';
import { Reducer, useCallback, useContext, useEffect, useReducer } from 'react';
import { Just, Maybe, Nothing } from 'purify-ts/Maybe';

import { buildStateMachine, StateTransition } from '../stateMachine';
import * as GenericQueryState from '../queryState';
import { BrowserSearchContext } from '../provider';

export type ResponsePayload<FieldValue> = FieldValue[];

export interface IdleState extends GenericQueryState.IdleQueryState {
}

export interface LoadingQueryState extends GenericQueryState.LoadingQueryState<GetIndexValuesRequest>  {
}

export interface StaleQueryState<T> extends GenericQueryState.StaleQueryState<GetIndexValuesRequest, ResponsePayload<T>> {
}

export interface SuccessQueryState<T> extends GenericQueryState.SuccessQueryState<GetIndexValuesRequest, ResponsePayload<T>> {
}

export interface ErrorQueryState extends GenericQueryState.ErrorQueryState<GetIndexValuesRequest, Error> {
}

export type QueryState<T> = IdleState | LoadingQueryState | StaleQueryState<T> | SuccessQueryState<T> | ErrorQueryState;

export type RequestStartedAction = { type: 'requestStarted'; request: GetIndexValuesRequest,};
export type RequestFailedAction = { type: 'requestFailed'; request: GetIndexValuesRequest, error: Error}
export type RequestCompletedAction<FieldValue> = { type: 'requestCompleted'; response: FieldValue[]; request: GetIndexValuesRequest,}

export type Action<FieldValue> =
  | RequestStartedAction
  | RequestFailedAction
  | RequestCompletedAction<FieldValue>;
  
type QueryReducer<T> = Reducer<QueryState<T>, Action<T>>;

const initialState: IdleState = {
  status: 'idle',
  isFetching: false,
};

const fromIdleToLoading = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<LoadingQueryState> => (
  state.status === 'idle' && action.type === 'requestStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    isFetching: true,
  }) : Nothing
)

const fromLoadingToLoading = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<LoadingQueryState> => (
  state.status === 'loading' && action.type === 'requestStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    isFetching: true,
  }) : Nothing
)

const fromLoadingToError = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<ErrorQueryState> => (
  state.status === 'loading' && action.type === 'requestFailed' && state.request === action.request ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)

const fromLoadingToSuccess = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<SuccessQueryState<FieldValue>> => (
  state.status === 'loading' && action.type === 'requestCompleted' && state.request === action.request ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

const fromSuccessToStale = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<StaleQueryState<FieldValue>> => (
  state.status === 'success' && action.type === 'requestStarted' ?
  Just({
    status: 'stale',
    request: state.request,
    response: state.response,
    newRequest: action.request,
    isFetching: true,
  }) : Nothing
)

const fromStaleToSuccess = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<SuccessQueryState<FieldValue>> => (
  state.status === 'stale' && action.type === 'requestCompleted' && state.newRequest === action.request ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

const fromStaleToStale = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<StaleQueryState<FieldValue>> => (
  state.status === 'stale' && action.type === 'requestStarted' ?
    Just({
      status: 'stale',
      request: state.request,
      response: state.response,
      newRequest: action.request,
      isFetching: true,
    }) :
   Nothing
)

const fromStaleToError = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<ErrorQueryState> => (
  state.status === 'stale' && action.type === 'requestFailed' && state.newRequest === action.request ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)

const fromErrorToLoading = <FieldValue>(state: QueryState<FieldValue>, action: Action<FieldValue>): Maybe<LoadingQueryState> => (
  state.status === 'error' && action.type === 'requestStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    isFetching: true,
  }) : Nothing
)

export const buildReducer = <FieldValue>(): QueryReducer<FieldValue> => {
  const stateTransitions: StateTransition<QueryState<FieldValue>, Action<FieldValue>>[] = [fromIdleToLoading, fromLoadingToLoading, fromLoadingToError, fromLoadingToSuccess, fromSuccessToStale, fromStaleToStale, fromStaleToSuccess, fromStaleToError, fromErrorToLoading];
  return buildStateMachine(stateTransitions);
}

export const useIndexValues = <T extends IDBValidKey>({storeId, field}: GetIndexValuesRequest): QueryState<T> => {
  const queryClient = useContext(BrowserSearchContext);
  const [state, dispatch] = useReducer<QueryReducer<T>>(
    buildReducer<T>(),
    initialState,
  );

  const runQuery = useCallback( (): void => {
    const request: GetIndexValuesRequest = {
      storeId,
      field,
    };

    const responsePromise = queryClient.queryIndex(request);
    
    dispatch({type: 'requestStarted', request})
    
    responsePromise
      .then(response => {
        dispatch({type: 'requestCompleted', response: response as T[], request})
      })
      .catch(error => {
        dispatch({type: 'requestFailed', request, error})
      })
  }, [storeId, field]);

  useEffect(() => {
    queryClient.subscribeToStoreChange(storeId)(runQuery);

    return () => {
      queryClient.unsubscribeToStoreChange(storeId)(runQuery);
    };
  }, [storeId, queryClient, runQuery]);

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return state;
}