import { SimplifiedIndexConfig, StoreId } from 'browser-search';
import { Reducer } from 'react';
import * as GenericQueryState from '../queryState';
export declare type ResponsePayload = null;
export declare type RequestPayload<DataSchema> = {
    storeId: StoreId;
    indexConfig: SimplifiedIndexConfig<DataSchema>;
    keyPath: keyof DataSchema;
};
export interface IdleState extends GenericQueryState.IdleState {
}
export interface LoadingQueryState<DataSchema> extends GenericQueryState.LoadingQueryState<RequestPayload<DataSchema>> {
}
export interface SuccessQueryState<DataSchema> extends GenericQueryState.SuccessQueryState<RequestPayload<DataSchema>, ResponsePayload> {
}
export interface ErrorQueryState<DataSchema> extends GenericQueryState.ErrorQueryState<RequestPayload<DataSchema>, Error> {
}
export declare type QueryState<DataSchema> = IdleState | LoadingQueryState<DataSchema> | SuccessQueryState<DataSchema> | ErrorQueryState<DataSchema>;
export declare type RequestStartedAction<DataSchema> = {
    type: 'requestStarted';
    request: RequestPayload<DataSchema>;
};
export declare type RequestFailedAction<DataSchema> = {
    type: 'requestFailed';
    request: RequestPayload<DataSchema>;
    error: Error;
};
export declare type RequestCompletedAction<DataSchema> = {
    type: 'requestCompleted';
    response: ResponsePayload;
    request: RequestPayload<DataSchema>;
};
export declare type Action<DataSchema> = RequestStartedAction<DataSchema> | RequestFailedAction<DataSchema> | RequestCompletedAction<DataSchema>;
declare type QueryReducer<DataSchema> = Reducer<QueryState<DataSchema>, Action<DataSchema>>;
export declare const buildReducer: <DataSchema>() => QueryReducer<DataSchema>;
export declare const useCreateStore: <DataSchema>() => [(request: RequestPayload<DataSchema>) => Promise<void>, QueryState<DataSchema>];
export {};
