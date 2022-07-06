import { StoreId } from 'browser-search';
import { Reducer } from 'react';
import * as GenericQueryState from '../queryState';
declare type IndexId = string;
export declare type RequestPayload = {
    indexId: IndexId;
    storeId: StoreId;
};
export declare type ResponsePayload<FieldValue> = FieldValue[];
export interface IdleState extends GenericQueryState.IdleState {
}
export interface LoadingQueryState extends GenericQueryState.LoadingQueryState<RequestPayload> {
}
export interface StaleQueryState<T> extends GenericQueryState.StaleQueryState<RequestPayload, ResponsePayload<T>> {
}
export interface SuccessQueryState<T> extends GenericQueryState.SuccessQueryState<RequestPayload, ResponsePayload<T>> {
}
export interface ErrorQueryState extends GenericQueryState.ErrorQueryState<RequestPayload, Error> {
}
export declare type QueryState<T> = IdleState | LoadingQueryState | StaleQueryState<T> | SuccessQueryState<T> | ErrorQueryState;
export declare type RequestStartedAction = {
    type: 'requestStarted';
    request: RequestPayload;
};
export declare type RequestFailedAction = {
    type: 'requestFailed';
    request: RequestPayload;
    error: Error;
};
export declare type RequestCompletedAction<FieldValue> = {
    type: 'requestCompleted';
    response: FieldValue[];
    request: RequestPayload;
};
export declare type Action<FieldValue> = RequestStartedAction | RequestFailedAction | RequestCompletedAction<FieldValue>;
declare type QueryReducer<T> = Reducer<QueryState<T>, Action<T>>;
export declare const buildReducer: <FieldValue>() => QueryReducer<FieldValue>;
export declare const useIndexValues: <T extends IDBValidKey>(storeId: StoreId, indexId: IndexId) => QueryState<T>;
export {};
