import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { useIndexValuesStates } from '../../__fixtures__';
import {
    buildReducer, LoadingQueryState, RequestCompletedAction, RequestFailedAction,
    RequestStartedAction, SuccessQueryState, useIndexValues,
} from '../useIndexValues';
import { useAddDataToStore } from '../../useAddDataToStore';
import { BrowserSearchProvider } from '../../provider/__mocks__';

const { getErrorStateFixture, getIdleStateFixture, getLoadingStateFixture, getStaleStateFixture, getSuccessStateFixture, getResponsePayloadFixture, getResquestPayloadFixture } = useIndexValuesStates;


jest.mock('../../queryClient');

const createWrapper = () => ({ children }: { children?: React.ReactNode }) => <BrowserSearchProvider>{children}</BrowserSearchProvider>

describe('useIndexValuesStates', () => {

  const storeId = 'storeId';
  const indexId = 'indexId';

  it('returns loading and success states when the promise is resolved', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useIndexValues(storeId, indexId), {wrapper: createWrapper()})

    const loadingState = result.current as LoadingQueryState;
    expect(loadingState.status).toBe('loading');
    expect(loadingState.request).toEqual({storeId, indexId});
    const loadingStateRequest = loadingState.request;

    await waitForNextUpdate();

    const successState = result.current as SuccessQueryState<unknown>;
    expect(successState.status).toBe('success');
    expect(successState.request).toBe(loadingStateRequest);
  })

  it('returns the same response (from the cache) when 2 identical requests are made', async () => {
    const renderHookResultA = renderHook(() => useIndexValues(storeId, indexId), {wrapper: createWrapper()})
    await renderHookResultA.waitForNextUpdate();
    const successStateA = renderHookResultA.result.current as SuccessQueryState<unknown>;
    const responseA = successStateA.response;

    const renderHookResultB = renderHook(() => useIndexValues(storeId, indexId), {wrapper: createWrapper()})
    await renderHookResultB.waitForNextUpdate();
    const successStateB = renderHookResultA.result.current as SuccessQueryState<unknown>;
    const responseB = successStateB.response;

    expect(responseA).toBe(responseB);
  })

  it('does not return the request from the cache when the store has been mutated', async () => {
    const {result: {current: [addDataToStore]}} = renderHook(() => useAddDataToStore(), {wrapper: createWrapper()})

    const renderHookResultA = renderHook(() => useIndexValues(storeId, indexId), {wrapper: createWrapper()})
    await renderHookResultA.waitForNextUpdate();
    const successStateA = renderHookResultA.result.current as SuccessQueryState<unknown>;
    const responseA = successStateA.response;

    await act(() => {addDataToStore({storeId, data: []})});

    const renderHookResultB = renderHook(() => useIndexValues(storeId, indexId), {wrapper: createWrapper()})
    await renderHookResultB.waitForNextUpdate();
    const successStateB = renderHookResultA.result.current as SuccessQueryState<unknown>;
    const responseB = successStateB.response;

    expect(responseA).not.toBe(responseB);
  })

  it('refreshes the response when the store has been mutated', async () => {
    const {result: {current: [addDataToStore]}} = renderHook(() => useAddDataToStore(), {wrapper: createWrapper()})

    const renderHookResult = renderHook(() => useIndexValues(storeId, indexId), {wrapper: createWrapper()})
    await renderHookResult.waitForNextUpdate();
    const successState = renderHookResult.result.current as SuccessQueryState<unknown>;
    const responseA = successState.response;

    await act(() => {addDataToStore({storeId, data: []})});

    const successStateB = renderHookResult.result.current as SuccessQueryState<unknown>;
    expect(responseA).not.toBe(successStateB.response);

  })

});


describe ('reducer', () => {
  const reducer = buildReducer<string>();
  
  describe('From idle state', () => {
    it('To loading state', async () => {
      const idleState = getIdleStateFixture();
      const searchStartedAction: RequestStartedAction = {type: 'requestStarted', request: getResquestPayloadFixture()};
      const expectedState = getLoadingStateFixture({
        request: searchStartedAction.request,
      });
  
      expect(reducer(idleState, searchStartedAction)).toEqual(expectedState);
    })
  });

  describe('From loading state', () => {
    it('to next loading state', async () => {
      const searchStartedAction: RequestStartedAction= {type: 'requestStarted', request: getResquestPayloadFixture()};
      const loadingState = getLoadingStateFixture({
        request: getResquestPayloadFixture(),
      });
      const expectedState = getLoadingStateFixture({
        request: searchStartedAction.request,
      });
  
      expect(reducer(loadingState, searchStartedAction)).toEqual(expectedState);
    })

    it('remains unchanged when the search completed is not the last one started (prevents race condition)', async () => {
      const searchCompletedAction: RequestCompletedAction<string> = {type: 'requestCompleted', request: getResquestPayloadFixture(), response: getResponsePayloadFixture()};
      const loadingState = getLoadingStateFixture();
      const expectedState = loadingState;
  
      expect(reducer(loadingState, searchCompletedAction)).toEqual(expectedState);
    })
  
    it('remains unchanged when the search failed is not the last one started (prevents race condition)', async () => {
      const searchFailedAction: RequestFailedAction = {type: 'requestFailed', request: getResquestPayloadFixture(), error: new Error()};
      const loadingState = getLoadingStateFixture();
      const expectedState = loadingState;
  
      expect(reducer(loadingState, searchFailedAction)).toEqual(expectedState);
    })

    it('to success state', async () => {
      const searchCompletedAction: RequestCompletedAction<string> = {type: 'requestCompleted', request: getResquestPayloadFixture(), response: getResponsePayloadFixture()};
      const loadingState = getLoadingStateFixture({
        request: searchCompletedAction.request
      });
      const expectedState = getSuccessStateFixture({
        request: searchCompletedAction.request,
        response: searchCompletedAction.response,
      });
  
      expect(reducer(loadingState, searchCompletedAction)).toEqual(expectedState);
    })

    it('to error state', async () => {
      const searchFailedAction: RequestFailedAction = {type: 'requestFailed', request: getResquestPayloadFixture(), error: new Error()};
      const loadingState = getLoadingStateFixture({
        request: searchFailedAction.request,
      });
      const expectedState = getErrorStateFixture({
        request: searchFailedAction.request,
        error: searchFailedAction.error,
      });
  
      expect(reducer(loadingState, searchFailedAction)).toEqual(expectedState);
    })
  });

  describe('From stale state', () => {

    it('to next stale state', async () => {
      const searchStartedAction: RequestStartedAction = {type: 'requestStarted', request: getResquestPayloadFixture()};
      const staleState = getStaleStateFixture<string>({
        newRequest: getResquestPayloadFixture(),
        request: getResquestPayloadFixture(),
      });
      const expectedState = getStaleStateFixture<string>({
        request: staleState.request,
        newRequest: searchStartedAction.request,
      });
  
      expect(reducer(staleState, searchStartedAction)).toEqual(expectedState);
    })
  
    it('remains unchanged when the search completed is not the last one started (prevents race condition)', async () => {
      const searchCompletedAction: RequestCompletedAction<string> = {type: 'requestCompleted', request: getResquestPayloadFixture(), response: getResponsePayloadFixture()};
      const staleState = getStaleStateFixture<string>();
      const expectedState = staleState;
  
      expect(reducer(staleState, searchCompletedAction)).toEqual(expectedState);
    })
  
    it('remains unchanged when the search failed is not the last one started (prevents race condition)', async () => {
      const searchFailedAction: RequestFailedAction = {type: 'requestFailed', request: getResquestPayloadFixture(), error: new Error()};
      const staleState = getStaleStateFixture<string>();
      const expectedState = staleState;
  
      expect(reducer(staleState, searchFailedAction)).toEqual(expectedState);
    })
  
    it('to success state', async () => {
      const searchCompletedAction: RequestCompletedAction<string> = {type: 'requestCompleted', request: getResquestPayloadFixture(), response: getResponsePayloadFixture()};
      const staleState = getStaleStateFixture<string>({
        newRequest: searchCompletedAction.request,
      });
      const expectedState = getSuccessStateFixture<string>({
        request: searchCompletedAction.request,
        response: searchCompletedAction.response,
      });
  
      expect(reducer(staleState, searchCompletedAction)).toEqual(expectedState);
    })

    it('to error state', async () => {
      const searchFailedAction: RequestFailedAction = {type: 'requestFailed', request: getResquestPayloadFixture(), error: new Error()};
      const staleState = getStaleStateFixture<string>({
        newRequest: searchFailedAction.request,
      });
      const expectedState = getErrorStateFixture({
        request: searchFailedAction.request,
        error: searchFailedAction.error,
      });
  
      expect(reducer(staleState, searchFailedAction)).toEqual(expectedState);
    })
  });

  describe('From success state', () => {
    it('to stale state', async () => {
      const successState = getSuccessStateFixture<string>();
      const searchStartedAction: RequestStartedAction = {type: 'requestStarted', request: getResquestPayloadFixture(),};
      const expectedState = getStaleStateFixture<string>({
        request: successState.request,
        response: successState.response,
        newRequest: searchStartedAction.request,
      });
  
      expect(reducer(successState, searchStartedAction)).toEqual(expectedState);
    })
  });

  describe('From error state', () => {
    it('to loading state', async () => {
      const errorState = getErrorStateFixture();
      const searchStartedAction: RequestStartedAction = {type: 'requestStarted', request: getResquestPayloadFixture(),};
      const expectedState = getLoadingStateFixture({
        request: searchStartedAction.request,
      });
  
      expect(reducer(errorState, searchStartedAction)).toEqual(expectedState);
    })
  });

})
