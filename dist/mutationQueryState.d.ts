export interface MutationIdleState {
    status: 'idle';
}
export interface MutationLoadingQueryState<Request> {
    status: 'loading';
    request: Request;
}
export interface MutationSuccessQueryState<Request, Response> {
    status: 'success';
    request: Request;
    response: Response;
}
export interface MutationErrorQueryState<Request, Error> {
    status: 'error';
    request: Request;
    error: Error;
}
export declare type MutationQueryState<Request, Response, Error> = MutationIdleState | MutationLoadingQueryState<Request> | MutationSuccessQueryState<Request, Response> | MutationErrorQueryState<Request, Error>;
