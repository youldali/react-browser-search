import { AddDocumentsToStoreRequest } from '@browser-search/browser-search';
import { Reducer, useCallback, useContext, useReducer } from 'react';
import { Just, Maybe, Nothing } from 'purify-ts/Maybe';

import { buildStateMachine, StateTransition } from '../stateMachine';
import * as GenericQueryState from '../queryState';
import { BrowserSearchContext } from '../provider';

export type ResponsePayload = null;

export interface IdleState extends GenericQueryState.IdleQueryState {
}

export interface LoadingQueryState<TDocument> extends GenericQueryState.LoadingQueryState<AddDocumentsToStoreRequest<TDocument>>  {
}

export interface SuccessQueryState<TDocument> extends GenericQueryState.SuccessQueryState<AddDocumentsToStoreRequest<TDocument>, ResponsePayload> {
}

export interface ErrorQueryState<TDocument> extends GenericQueryState.ErrorQueryState<AddDocumentsToStoreRequest<TDocument>, Error> {
}

export type QueryState<TDocument> = IdleState | LoadingQueryState<TDocument> | SuccessQueryState<TDocument> | ErrorQueryState<TDocument>;


const fromIdleToLoading = <TDocument>(state: QueryState<TDocument>, action: Action<TDocument>): Maybe<LoadingQueryState<TDocument>> => (
  state.status === 'idle' && action.type === 'requestStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    isFetching: true,
  }) : Nothing
)

const fromLoadingToError = <TDocument>(state: QueryState<TDocument>, action: Action<TDocument>): Maybe<ErrorQueryState<TDocument>> => (
  state.status === 'loading' && action.type === 'requestFailed' ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)

const fromLoadingToSuccess = <TDocument>(state: QueryState<TDocument>, action: Action<TDocument>): Maybe<SuccessQueryState<TDocument>> => (
  state.status === 'loading' && action.type === 'requestCompleted' ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

export type RequestStartedAction<TDocument> = { type: 'requestStarted'; request: AddDocumentsToStoreRequest<TDocument>,};
export type RequestFailedAction<TDocument> = { type: 'requestFailed'; request: AddDocumentsToStoreRequest<TDocument>, error: Error}
export type RequestCompletedAction<TDocument> = { type: 'requestCompleted'; response: ResponsePayload; request: AddDocumentsToStoreRequest<TDocument>,}

export type Action<TDocument> =
  | RequestStartedAction<TDocument>
  | RequestFailedAction<TDocument>
  | RequestCompletedAction<TDocument>;
  
type QueryReducer<TDocument> = Reducer<QueryState<TDocument>, Action<TDocument>>;

const initialState: IdleState = {
  status: 'idle',
  isFetching: false,
};


export const buildReducer = <TDocument>(): QueryReducer<TDocument> => {
  const stateTransitions: StateTransition<QueryState<TDocument>, Action<TDocument>>[] = [fromIdleToLoading, fromLoadingToError, fromLoadingToSuccess];
  return buildStateMachine(stateTransitions);
}

export const useAddDocumentsToStore = <TDocument>(): [(request: AddDocumentsToStoreRequest<TDocument>) => Promise<void>, QueryState<TDocument>] => {
  const queryClient = useContext(BrowserSearchContext);
  const [state, dispatch] = useReducer<QueryReducer<TDocument>>(
    buildReducer(),
    initialState,
  );

  const runQuery = useCallback( (request: AddDocumentsToStoreRequest<TDocument>): Promise<void> => {
    const responsePromise = queryClient.addDocumentsToStore<TDocument>(request);
    
    dispatch({type: 'requestStarted', request})
    
    return (
      responsePromise
      .then(_ => {
        dispatch({type: 'requestCompleted', response: null, request})
        return;
      })
      .catch(error => {
        dispatch({type: 'requestFailed', request, error})
      })
    )
  }, [queryClient]);

  return [runQuery, state];
}