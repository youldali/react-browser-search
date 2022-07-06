import { StoreId } from 'browser-search';
import { Reducer } from 'react';
import * as GenericQueryState from '../queryState';
export declare type ResponsePayload = null;
export declare type RequestPayload = {
    storeId: StoreId;
};
export interface IdleState extends GenericQueryState.IdleState {
}
export interface LoadingQueryState extends GenericQueryState.LoadingQueryState<RequestPayload> {
}
export interface SuccessQueryState extends GenericQueryState.SuccessQueryState<RequestPayload, ResponsePayload> {
}
export interface ErrorQueryState extends GenericQueryState.ErrorQueryState<RequestPayload, Error> {
}
export declare type QueryState = IdleState | LoadingQueryState | SuccessQueryState | ErrorQueryState;
export declare type RequestStartedAction = {
    type: 'requestStarted';
    request: RequestPayload;
};
export declare type RequestFailedAction = {
    type: 'requestFailed';
    request: RequestPayload;
    error: Error;
};
export declare type RequestCompletedAction = {
    type: 'requestCompleted';
    response: ResponsePayload;
    request: RequestPayload;
};
export declare type Action = RequestStartedAction | RequestFailedAction | RequestCompletedAction;
declare type QueryReducer = Reducer<QueryState, Action>;
export declare const buildReducer: () => QueryReducer;
export declare const useDeleteStore: () => [(request: RequestPayload) => Promise<void>, QueryState];
export {};
