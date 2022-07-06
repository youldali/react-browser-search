import * as BS from 'browser-search';
import { Reducer } from 'react';
import * as GenericQueryState from '../queryState';
declare type RequestPayload<Document, TFilterId extends string> = BS.Request<Document, TFilterId>;
declare type RunQueryTrigger = 'store-mutation' | 'request-change';
export declare type SearchResponse<Document, TFilterId extends string = string> = Omit<BS.SearchResponse<Document, TFilterId>, '_cacheStatus_'>;
export interface IdleState extends GenericQueryState.IdleState {
}
export interface LoadingQueryState<Document, TFilterId extends string = string> extends GenericQueryState.LoadingQueryState<RequestPayload<Document, TFilterId>> {
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
export declare type QueryState<Document, TFilterId extends string = string> = IdleState | LoadingQueryState<Document, TFilterId> | SuccessQueryState<Document, TFilterId> | StaleQueryState<Document, TFilterId> | ErrorQueryState<Document, TFilterId>;
export declare type SearchStartedAction<Document, TFilterId extends string = string> = {
    type: 'searchStarted';
    request: BS.Request<Document, TFilterId>;
    abort: BS.AbortSearch;
    trigger: RunQueryTrigger;
};
export declare type SearchCompletedAction<Document, TFilterId extends string = string> = {
    type: 'searchCompleted';
    response: BS.SearchResponse<Document, TFilterId>;
    request: BS.Request<Document, TFilterId>;
};
export declare type SearchFailedAction<Document, TFilterId extends string = string> = {
    type: 'searchFailed';
    request: BS.Request<Document, TFilterId>;
    error: Error;
};
export declare type Action<Document, TFilterId extends string = string> = SearchStartedAction<Document, TFilterId> | SearchCompletedAction<Document, TFilterId> | SearchFailedAction<Document, TFilterId>;
declare type QueryReducer<Document, TFilterId extends string = string> = Reducer<QueryState<Document, TFilterId>, Action<Document, TFilterId>>;
export declare const buildReducer: <Document_1, TFilterId extends string = string>() => QueryReducer<Document_1, TFilterId>;
export declare const useQuery: <Document_1, TFilterId extends string = string>(request: BS.Request<Document_1, TFilterId>) => QueryState<Document_1, TFilterId>;
export {};
