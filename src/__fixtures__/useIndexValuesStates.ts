import { GetIndexValuesRequest } from '@browser-search/browser-search';

import {
    UseIndexValuesErrorState,
    UseIndexValuesIdleState,
    UseIndexValuesLoadingState,
    UseIndexValuesResponsePayload,
    UseIndexValuesStaleState,
    UseIndexValuesSuccessState,
} from '../useIndexValues';

import { createFixture } from './createFixture';

const idleState: UseIndexValuesIdleState = {
  status: 'idle',
  isFetching: false,
}

const request: GetIndexValuesRequest = {
  storeId: 'storeId',
  field: 'indexId',
}

const response: UseIndexValuesResponsePayload<unknown> = [];

const loadingState: UseIndexValuesLoadingState = {
  status: 'loading',
  isFetching: true,
  request: request,
}

const successState: UseIndexValuesSuccessState<any> = {
  status: 'success',
  isFetching: false,
  request: request,
  response: response,
}

const staleState: UseIndexValuesStaleState<any> = {
  status: 'stale',
  isFetching: true,
  request: request,
  response: response,
  newRequest: request,
}

const errorState: UseIndexValuesErrorState = {
  status: 'error',
  isFetching: false,
  request: request,
  error: new Error(),
}

export const getResquestPayloadFixture = (overrides?: Partial<GetIndexValuesRequest>) => createFixture(request)(overrides);
export const getResponsePayloadFixture = <FieldValues = string>(overrides?: Partial<UseIndexValuesResponsePayload<FieldValues>>) => createFixture(response as UseIndexValuesResponsePayload<FieldValues>)(overrides);

export const getIdleStateFixture = () => createFixture(idleState)();
export const getLoadingStateFixture = (overrides?: Partial<UseIndexValuesLoadingState>) => createFixture<UseIndexValuesLoadingState>(loadingState)(overrides);
export const getSuccessStateFixture = <FieldValues = string>(overrides?: Partial<UseIndexValuesSuccessState<FieldValues>>) => createFixture<UseIndexValuesSuccessState<FieldValues>>(successState)(overrides);
export const getStaleStateFixture = <FieldValues = string>(overrides?: Partial<UseIndexValuesStaleState<FieldValues>>) => createFixture<UseIndexValuesStaleState<FieldValues>>(staleState)(overrides);
export const getErrorStateFixture = (overrides?: Partial<UseIndexValuesErrorState>) => createFixture<UseIndexValuesErrorState>(errorState)(overrides);
