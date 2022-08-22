export interface IdleQueryState {
  status: 'idle';
  isFetching: false;
}

export interface LoadingQueryState<Request> {
  status: 'loading';
  request: Request;
  isFetching: true;
}

export interface SuccessQueryState<Request, Response> {
  status: 'success';
  request: Request;
  response: Response;
  isFetching: false;
}

export interface StaleQueryState<Request, Response> {
  status: 'stale';
  request: Request;
  response: Response;
  newRequest: Request;
  isFetching: true;
}

export interface ErrorQueryState<Request, Error> {
  status: 'error';
  request: Request;
  error: Error;
  isFetching: false;
}

export type QueryState<Request, Response, Error> = IdleQueryState | LoadingQueryState<Request> | SuccessQueryState<Request, Response> | StaleQueryState<Request, Response> | ErrorQueryState<Request, Error>;
