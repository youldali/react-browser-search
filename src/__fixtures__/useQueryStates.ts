import {
    UseQueryErrorState, UseQueryIdleState, UseQueryLoadingState, UseQueryStaleState,
    UseQuerySuccessState,
} from '../useQuery';

import { createFixture } from './createFixture';
import { getRequestFixture } from './request';
import { getResponseFixture } from './response';

const idleState: UseQueryIdleState = {
  status: 'idle',
  isFetching: false,
}

const loadingState: UseQueryLoadingState<any> = {
  status: 'loading',
  isFetching: true,
  request: getRequestFixture(),
  abort: jest.fn(),
  trigger: 'request-change',
}

const successState: UseQuerySuccessState<any> = {
  status: 'success',
  isFetching: false,
  request: getRequestFixture(),
  response: getResponseFixture(),
}

const staleState: UseQueryStaleState<any> = {
  status: 'stale',
  isFetching: true,
  request: getRequestFixture(),
  response: getResponseFixture(),
  newRequest: getRequestFixture(),
  abort: jest.fn(),
  trigger: 'request-change',
  areStatsStale: true,
}

const errorState: UseQueryErrorState<any> = {
  status: 'error',
  isFetching: false,
  request: getRequestFixture(),
  error: new Error(),
}

export const getIdleStateFixture = () => createFixture(idleState)();
export const getLoadingStateFixture = <Document>(overrides?: Partial<UseQueryLoadingState<Document>>) => createFixture<UseQueryLoadingState<Document>>(loadingState)(overrides);
export const getSuccessStateFixture = <Document>(overrides?: Partial<UseQuerySuccessState<Document>>) => createFixture<UseQuerySuccessState<Document>>(successState)(overrides);
export const getStaleStateFixture = <Document>(overrides?: Partial<UseQueryStaleState<Document>>) => createFixture<UseQueryStaleState<Document>>(staleState)(overrides);
export const getErrorStateFixture = <Document>(overrides?: Partial<UseQueryErrorState<Document>>) => createFixture<UseQueryErrorState<Document>>(errorState)(overrides);
