import { StoreId } from 'browser-search';
import { Reducer } from 'react';
import * as GenericQueryState from '../queryState';
export declare type ResponsePayload = null;
export declare type RequestPayload<Data> = {
    storeId: StoreId;
    data: Data[];
};
export interface IdleState extends GenericQueryState.IdleState {
}
export interface LoadingQueryState<Data> extends GenericQueryState.LoadingQueryState<RequestPayload<Data>> {
}
export interface SuccessQueryState<Data> extends GenericQueryState.SuccessQueryState<RequestPayload<Data>, ResponsePayload> {
}
export interface ErrorQueryState<Data> extends GenericQueryState.ErrorQueryState<RequestPayload<Data>, Error> {
}
export declare type QueryState<Data> = IdleState | LoadingQueryState<Data> | SuccessQueryState<Data> | ErrorQueryState<Data>;
export declare type RequestStartedAction<Data> = {
    type: 'requestStarted';
    request: RequestPayload<Data>;
};
export declare type RequestFailedAction<Data> = {
    type: 'requestFailed';
    request: RequestPayload<Data>;
    error: Error;
};
export declare type RequestCompletedAction<Data> = {
    type: 'requestCompleted';
    response: ResponsePayload;
    request: RequestPayload<Data>;
};
export declare type Action<Data> = RequestStartedAction<Data> | RequestFailedAction<Data> | RequestCompletedAction<Data>;
declare type QueryReducer<Data> = Reducer<QueryState<Data>, Action<Data>>;
export declare const buildReducer: <Data>() => QueryReducer<Data>;
export declare const useAddDataToStore: <Data>() => [(request: RequestPayload<Data>) => Promise<void>, QueryState<Data>];
export {};
