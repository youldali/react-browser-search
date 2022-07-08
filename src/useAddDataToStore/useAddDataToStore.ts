import { StoreId } from '@browser-search/browser-search';
import { Reducer, useCallback, useContext, useReducer } from 'react';
import { Just, Maybe, Nothing } from 'purify-ts/Maybe';

import { buildStateMachine, StateTransition } from '../stateMachine';
import * as GenericQueryState from '../queryState';
import { BrowserSearchContext } from '../provider';

export type ResponsePayload = null;
export type RequestPayload<Data> = {
  storeId: StoreId,
  data: Data[];
};


export interface IdleState extends GenericQueryState.IdleState {
}

export interface LoadingQueryState<Data> extends GenericQueryState.LoadingQueryState<RequestPayload<Data>>  {
}

export interface SuccessQueryState<Data> extends GenericQueryState.SuccessQueryState<RequestPayload<Data>, ResponsePayload> {
}

export interface ErrorQueryState<Data> extends GenericQueryState.ErrorQueryState<RequestPayload<Data>, Error> {
}

export type QueryState<Data> = IdleState | LoadingQueryState<Data> | SuccessQueryState<Data> | ErrorQueryState<Data>;


const fromIdleToLoading = <Data>(state: QueryState<Data>, action: Action<Data>): Maybe<LoadingQueryState<Data>> => (
  state.status === 'idle' && action.type === 'requestStarted' ?
  Just({
    status: 'loading',
    request: action.request,
    isFetching: true,
  }) : Nothing
)

const fromLoadingToError = <Data>(state: QueryState<Data>, action: Action<Data>): Maybe<ErrorQueryState<Data>> => (
  state.status === 'loading' && action.type === 'requestFailed' ?
  Just({
    status: 'error',
    request: action.request,
    error: action.error,
    isFetching: false,
  }) : Nothing
)

const fromLoadingToSuccess = <Data>(state: QueryState<Data>, action: Action<Data>): Maybe<SuccessQueryState<Data>> => (
  state.status === 'loading' && action.type === 'requestCompleted' ?
  Just({
    status: 'success',
    request: action.request,
    response: action.response,
    isFetching: false,
  }) : Nothing
)

export type RequestStartedAction<Data> = { type: 'requestStarted'; request: RequestPayload<Data>,};
export type RequestFailedAction<Data> = { type: 'requestFailed'; request: RequestPayload<Data>, error: Error}
export type RequestCompletedAction<Data> = { type: 'requestCompleted'; response: ResponsePayload; request: RequestPayload<Data>,}

export type Action<Data> =
  | RequestStartedAction<Data>
  | RequestFailedAction<Data>
  | RequestCompletedAction<Data>;
  
type QueryReducer<Data> = Reducer<QueryState<Data>, Action<Data>>;

const initialState: IdleState = {
  status: 'idle',
  isFetching: false,
};


export const buildReducer = <Data>(): QueryReducer<Data> => {
  const stateTransitions: StateTransition<QueryState<Data>, Action<Data>>[] = [fromIdleToLoading, fromLoadingToError, fromLoadingToSuccess];
  return buildStateMachine(stateTransitions);
}

export const useAddDataToStore = <Data>(): [(request: RequestPayload<Data>) => Promise<void>, QueryState<Data>] => {
  const queryClient = useContext(BrowserSearchContext);
  const [state, dispatch] = useReducer<QueryReducer<Data>>(
    buildReducer(),
    initialState,
  );

  const runQuery = useCallback( (request: RequestPayload<Data>): Promise<void> => {
    const responsePromise = queryClient.addDataToStore<Data>(request.storeId)(request.data);
    
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