import { SimplifiedIndexConfig, StoreId } from '@browser-search/browser-search';
import { Reducer, useCallback, useContext, useReducer } from 'react';
import { Just, Maybe, Nothing } from 'purify-ts/Maybe';

import { buildStateMachine, StateTransition } from '../stateMachine';
import * as GenericQueryState from '../queryState';
import { BrowserSearchContext } from '../provider';

export type ResponsePayload = null;
export type RequestPayload = {
  storeId: StoreId,
};


export interface IdleState extends GenericQueryState.IdleState {
}

export interface LoadingQueryState extends GenericQueryState.LoadingQueryState<RequestPayload>  {
}

export interface SuccessQueryState extends GenericQueryState.SuccessQueryState<RequestPayload, ResponsePayload> {
}

export interface ErrorQueryState extends GenericQueryState.ErrorQueryState<RequestPayload, Error> {
}

export type QueryState = IdleState | LoadingQueryState | SuccessQueryState | ErrorQueryState;


const fromIdleToLoading = (state: QueryState, action: Action): Maybe<LoadingQueryState> => (
  state.status === 'idle' && action.type === 'requestStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    isFetching: true,
  }) : Nothing
)

const fromLoadingToError = (state: QueryState, action: Action): Maybe<ErrorQueryState> => (
  state.status === 'loading' && action.type === 'requestFailed' ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)

const fromLoadingToSuccess = (state: QueryState, action: Action): Maybe<SuccessQueryState> => (
  state.status === 'loading' && action.type === 'requestCompleted' ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

export type RequestStartedAction = { type: 'requestStarted'; request: RequestPayload,};
export type RequestFailedAction = { type: 'requestFailed'; request: RequestPayload, error: Error}
export type RequestCompletedAction = { type: 'requestCompleted'; response: ResponsePayload; request: RequestPayload,}

export type Action =
  | RequestStartedAction
  | RequestFailedAction
  | RequestCompletedAction;
  
type QueryReducer = Reducer<QueryState, Action>;

const initialState: IdleState = {
  status: 'idle',
  isFetching: false,
};


export const buildReducer = (): QueryReducer => {
  const stateTransitions: StateTransition<QueryState, Action>[] = [fromIdleToLoading, fromLoadingToError, fromLoadingToSuccess];
  return buildStateMachine(stateTransitions);
}

export const useDeleteStore = (): [(request: RequestPayload) => Promise<void>, QueryState] => {
  const queryClient = useContext(BrowserSearchContext);
  const [state, dispatch] = useReducer<QueryReducer>(
    buildReducer(),
    initialState,
  );

  const runQuery = useCallback( (request: RequestPayload): Promise<void> => {
    const responsePromise = queryClient.deleteStore(request.storeId);
    
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