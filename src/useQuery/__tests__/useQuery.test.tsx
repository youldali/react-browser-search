import React from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { getRequestFixture, getResponseFixture, useQueryStates } from '../../__fixtures__';
import {
    buildReducer, LoadingQueryState, SearchCompletedAction, SearchFailedAction, SearchStartedAction,
    SuccessQueryState, useQuery,
} from '../useQuery';
import { useAddDataToStore } from '../../useAddDataToStore';
import { BrowserSearchProvider } from '../../provider/__mocks__';

jest.mock('../../queryClient');

const createWrapper = () => ({ children }: { children?: React.ReactNode }) => <BrowserSearchProvider>{children}</BrowserSearchProvider>

const { getErrorStateFixture, getIdleStateFixture, getLoadingStateFixture, getStaleStateFixture, getSuccessStateFixture } = useQueryStates;

describe('useQuery', () => {

  const storeId = 'storeId';

  it('returns loading and success states when the promise is resolved', async () => {
    const request = getRequestFixture();
    const {result, waitForNextUpdate} = renderHook(() => useQuery(request), {wrapper: createWrapper()})

    const loadingState = result.current as LoadingQueryState<unknown>;
    expect(loadingState.status).toBe('loading');
    expect(loadingState.request).toEqual(request);
    const loadingStateRequest = loadingState.request;

    await waitForNextUpdate();

    const successState = result.current as SuccessQueryState<unknown>;
    expect(successState.status).toBe('success');
    expect(successState.request).toBe(loadingStateRequest);
  })

  it('returns the same response (from the cache) when 2 identical requests are made', async () => {
    const requestA = getRequestFixture();
    const renderHookResultA = renderHook(() => useQuery(requestA), {wrapper: createWrapper()})
    await renderHookResultA.waitForNextUpdate();
    const successStateA = renderHookResultA.result.current as SuccessQueryState<unknown>;
    const responseA = successStateA.response;

    const requestB = getRequestFixture();
    const renderHookResultB = renderHook(() => useQuery(requestB), {wrapper: createWrapper()})
    await renderHookResultB.waitForNextUpdate();
    const successStateB = renderHookResultA.result.current as SuccessQueryState<unknown>;
    const responseB = successStateB.response;

    expect(responseA).toBe(responseB);
  })

  it('does not return the request from the cache when the store has been mutated', async () => {
    const request = getRequestFixture({storeId});
    const {result: {current: [addDataToStore]}} = renderHook(() => useAddDataToStore(), {wrapper: createWrapper()})

    const renderHookResultA = renderHook(() => useQuery(request), {wrapper: createWrapper()})
    await renderHookResultA.waitForNextUpdate();
    const successStateA = renderHookResultA.result.current as SuccessQueryState<unknown>;
    const responseA = successStateA.response;

    await act(() => {addDataToStore({storeId, data: []})});

    const renderHookResultB = renderHook(() => useQuery(request), {wrapper: createWrapper()})
    await renderHookResultB.waitForNextUpdate();
    const successStateB = renderHookResultA.result.current as SuccessQueryState<unknown>;
    const responseB = successStateB.response;

    expect(responseA).not.toBe(responseB);
  })

  it('refreshes the response when the store has been mutated', async () => {
    const request = getRequestFixture({storeId});
    const {result: {current: [addDataToStore]}} = renderHook(() => useAddDataToStore(), {wrapper: createWrapper()})

    const renderHookResult = renderHook(() => useQuery(request), {wrapper: createWrapper()})
    await renderHookResult.waitForNextUpdate();
    const successState = renderHookResult.result.current as SuccessQueryState<unknown>;
    const responseA = successState.response;

    await act(() => {addDataToStore({storeId, data: []})});

    const successStateB = renderHookResult.result.current as SuccessQueryState<unknown>;
    expect(responseA).not.toBe(successStateB.response);

  })

});




describe('reducer', () => {
  const reducer = buildReducer();
  
  describe('From idle state', () => {
    it('To loading state', async () => {
      const idleState = getIdleStateFixture();
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const expectedState = getLoadingStateFixture({
        request: searchStartedAction.request,
        abort: searchStartedAction.abort,
      });
  
      expect(reducer(idleState, searchStartedAction)).toEqual(expectedState);
    })
  });

  describe('From loading state', () => {
    it('to next loading state and aborts the previous request is they are different requests', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const loadingState = getLoadingStateFixture({
        request: getRequestFixture({
          filtersApplied: ['random-filter'],
        }),
        abort: jest.fn()
      });
      const expectedState = getLoadingStateFixture({
        request: searchStartedAction.request,
        abort: searchStartedAction.abort,
        trigger: 'request-change'
      });
  
      expect(reducer(loadingState, searchStartedAction)).toEqual(expectedState);
      expect(loadingState.abort).toHaveBeenCalledTimes(1);
    })

    it('to next loading state and aborts the previous request the trigger for the new request is a store mutation', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'store-mutation'};
      const loadingState = getLoadingStateFixture({
        request: searchStartedAction.request,
        abort: jest.fn()
      });
      const expectedState = getLoadingStateFixture({
        request: searchStartedAction.request,
        abort: searchStartedAction.abort,
        trigger: 'store-mutation',
      });
  
      expect(reducer(loadingState, searchStartedAction)).toEqual(expectedState);
      expect(loadingState.abort).toHaveBeenCalledTimes(1);
    })

    it('to next loading state and does not abort the previous request is they are equal and the trigger is not a store mutation', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const loadingState = getLoadingStateFixture({
        request: getRequestFixture(),
        abort: jest.fn(),
        trigger: 'request-change',
      });
      const expectedState = getLoadingStateFixture({
        request: searchStartedAction.request,
        abort: searchStartedAction.abort,
      });
  
      expect(reducer(loadingState, searchStartedAction)).toEqual(expectedState);
      expect(loadingState.abort).not.toHaveBeenCalled();
    })
  
    it('remains unchanged when the search completed is not the last one started (prevents race condition)', async () => {
      const searchCompletedAction: SearchCompletedAction<unknown> = {type: 'searchCompleted', request: getRequestFixture(), response: getResponseFixture()};
      const loadingState = getLoadingStateFixture();
      const expectedState = loadingState;
  
      expect(reducer(loadingState, searchCompletedAction)).toEqual(expectedState);
    })
  
    it('remains unchanged when the search failed is not the last one started (prevents race condition)', async () => {
      const searchFailedAction: SearchFailedAction<unknown> = {type: 'searchFailed', request: getRequestFixture(), error: new Error()};
      const loadingState = getLoadingStateFixture();
      const expectedState = loadingState;
  
      expect(reducer(loadingState, searchFailedAction)).toEqual(expectedState);
    })
  
    it('to success state', async () => {
      const searchCompletedAction: SearchCompletedAction<unknown> = {type: 'searchCompleted', request: getRequestFixture(), response: getResponseFixture()};
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
      const searchFailedAction: SearchFailedAction<unknown> = {type: 'searchFailed', request: getRequestFixture(), error: new Error()};
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

    it('to next stale state and have areStatsStale to true if the request filters is different than the resolved request', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const staleState = getStaleStateFixture({
        newRequest: getRequestFixture(),
        request: getRequestFixture({
          filtersApplied: ['random-filter'],
        }),
        abort: jest.fn(),
        trigger: 'request-change',
      });
      const expectedState = getStaleStateFixture({
        request: staleState.request,
        newRequest: searchStartedAction.request,
        abort: searchStartedAction.abort,
        areStatsStale: true,
        trigger: 'request-change',
      });
  
      expect(reducer(staleState, searchStartedAction)).toEqual(expectedState);
    })

    it('to next stale state and have areStatsStale to true if the request config is different than the resolved request', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const staleState = getStaleStateFixture<any>({
        newRequest: searchStartedAction.request,
        request: getRequestFixture({
          filterConfig: [[{id: 'test', field: 'test', operand: 10, operator: 'equals'}]],
        }),
        abort: jest.fn(),
        trigger: 'request-change',
      });
      const expectedState = getStaleStateFixture({
        request: staleState.request,
        newRequest: searchStartedAction.request,
        abort: searchStartedAction.abort,
        areStatsStale: true,
        trigger: 'request-change',
      });
  
      expect(reducer(staleState, searchStartedAction)).toEqual(expectedState);
    })

    it('to next stale state and have areStatsStale to false if the request config / filters is the same and request is of type request-change', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const staleState = getStaleStateFixture<any>({
        newRequest: searchStartedAction.request,
        request: getRequestFixture({
          filterConfig: searchStartedAction.request.filterConfig,
          filtersApplied: searchStartedAction.request.filtersApplied,
        }),
        abort: jest.fn(),
        trigger: 'request-change',
      });
      const expectedState = getStaleStateFixture({
        request: staleState.request,
        newRequest: searchStartedAction.request,
        abort: searchStartedAction.abort,
        areStatsStale: false,
        trigger: 'request-change',
      });
  
      expect(reducer(staleState, searchStartedAction)).toEqual(expectedState);
    })

    it('to next stale state and have areStatsStale to true if the request is a store mutation', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'store-mutation'};
      const staleState = getStaleStateFixture({
        newRequest: searchStartedAction.request,
        request: searchStartedAction.request,
        abort: jest.fn(),
        trigger: 'request-change',
      });
      const expectedState = getStaleStateFixture({
        request: staleState.request,
        newRequest: searchStartedAction.request,
        abort: searchStartedAction.abort,
        areStatsStale: true,
        trigger: 'store-mutation',
      });
  
      expect(reducer(staleState, searchStartedAction)).toEqual(expectedState);
    })

    it('to next stale state and aborts the previous request is they are different', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const staleState = getStaleStateFixture({
        newRequest: getRequestFixture({
          filtersApplied: ['random-filter'],
        }),
        request: searchStartedAction.request,
        abort: jest.fn(),
        trigger: 'request-change',
      });
      const expectedState = getStaleStateFixture({
        newRequest: searchStartedAction.request,
        abort: searchStartedAction.abort,
        areStatsStale: false,
        trigger: 'request-change',
      });
  
      expect(reducer(staleState, searchStartedAction)).toEqual(expectedState);
      expect(staleState.abort).toHaveBeenCalledTimes(1);
    })

    it('to next stale state and aborts the previous request if the new request trigger is a store mutation', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'store-mutation'};
      const staleState = getStaleStateFixture({
        request: searchStartedAction.request,
        newRequest: searchStartedAction.request,
        abort: jest.fn()
      });
      const expectedState = getStaleStateFixture({
        newRequest: searchStartedAction.request,
        abort: searchStartedAction.abort,
        trigger: 'store-mutation',
        areStatsStale: true,
      });
  
      expect(reducer(staleState, searchStartedAction)).toEqual(expectedState);
      expect(staleState.abort).toHaveBeenCalledTimes(1);
    })

    it('to next stale state and does not abort the previous request is they are equal', async () => {
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const staleState = getStaleStateFixture({
        request: searchStartedAction.request,
        newRequest: getRequestFixture(),
        abort: jest.fn()
      });
      const expectedState = getStaleStateFixture({
        newRequest: searchStartedAction.request,
        abort: searchStartedAction.abort,
        areStatsStale: false,
      });
  
      expect(reducer(staleState, searchStartedAction)).toEqual(expectedState);
      expect(staleState.abort).not.toHaveBeenCalled();
    })
  
    it('remains unchanged when the search completed is not the last one started (prevents race condition)', async () => {
      const searchCompletedAction: SearchCompletedAction<unknown> = {type: 'searchCompleted', request: getRequestFixture(), response: getResponseFixture()};
      const staleState = getStaleStateFixture();
      const expectedState = staleState;
  
      expect(reducer(staleState, searchCompletedAction)).toEqual(expectedState);
    })
  
    it('remains unchanged when the search failed is not the last one started (prevents race condition)', async () => {
      const searchFailedAction: SearchFailedAction<unknown> = {type: 'searchFailed', request: getRequestFixture(), error: new Error()};
      const staleState = getStaleStateFixture();
      const expectedState = staleState;
  
      expect(reducer(staleState, searchFailedAction)).toEqual(expectedState);
    })
  
    it('to success state', async () => {
      const searchCompletedAction: SearchCompletedAction<unknown> = {type: 'searchCompleted', request: getRequestFixture(), response: getResponseFixture()};
      const staleState = getStaleStateFixture({
        newRequest: searchCompletedAction.request,
      });
      const expectedState = getSuccessStateFixture({
        request: searchCompletedAction.request,
        response: searchCompletedAction.response,
      });
  
      expect(reducer(staleState, searchCompletedAction)).toEqual(expectedState);
    })

    it('to error state', async () => {
      const searchFailedAction: SearchFailedAction<unknown> = {type: 'searchFailed', request: getRequestFixture(), error: new Error()};
      const staleState = getStaleStateFixture({
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
      const successState = getSuccessStateFixture();
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const expectedState = getStaleStateFixture({
        request: successState.request,
        response: successState.response,
        newRequest: searchStartedAction.request,
        abort: searchStartedAction.abort,
        areStatsStale: false,
      });
  
      expect(reducer(successState, searchStartedAction)).toEqual(expectedState);
    })
  });

  describe('From error state', () => {
    it('to loading state', async () => {
      const errorState = getErrorStateFixture();
      const searchStartedAction: SearchStartedAction<unknown> = {type: 'searchStarted', request: getRequestFixture(), abort: jest.fn(), trigger: 'request-change'};
      const expectedState = getLoadingStateFixture({
        request: searchStartedAction.request,
        abort: searchStartedAction.abort,
      });
  
      expect(reducer(errorState, searchStartedAction)).toEqual(expectedState);
    })
  });

})
