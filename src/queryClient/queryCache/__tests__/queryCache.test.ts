import { QueryRequest, QueryResponse, StoreId } from '@browser-search/browser-search';

import { buildQueryCache } from '../queryCache';

describe ('buildQueryCache', () => {
  
  const storeId: StoreId = 'storeId';
  const request: QueryRequest<object, string> = {
    storeId,
    filterConfig: [],
    filtersApplied: [],
  };

  const response: QueryResponse<object, string> = {
    documents: [] as object[],
    stats: {},
    numberOfDocuments: 0,  
    _cacheStatus_: "none",
  }

  describe('queryCache', () => {
    it('gets the resolved value if it exists', () => {
      const cache = buildQueryCache();

      cache.addQueryToCache(request, Promise.resolve(response))
      const just = cache.queryCache(request);
      expect(just.extract()).resolves.toBe(response);
    })

    it('gets the pending promise if no value exists', () => {
      const cache = buildQueryCache();

      const pendingPromise: Promise<QueryResponse<object, string>> = new Promise(() => {})
      cache.addQueryToCache(request, pendingPromise);

      const just = cache.queryCache(request);
      expect(just.extract()).toBe(pendingPromise);
    })

    it('returns nothing if no value exists', () => {
      const cache = buildQueryCache();

      const nothing = cache.queryCache(request);
      expect(nothing.isNothing()).toBe(true);
    })
  })

  describe('addQueryToCache', () => {
    it('adds the query to the cache', () => {
      const cache = buildQueryCache();

      cache.addQueryToCache(request, Promise.resolve(response))
      const just = cache.queryCache(request);
      expect(just.extract()).resolves.toBe(response);
    })
  })

  describe('deleteStoreCache', () => {
    it('deletes the store cache', () => {
      const cache = buildQueryCache();

      cache.addQueryToCache(request, Promise.resolve(response))
      cache.deleteStoreCache(request.storeId);

      const nothing = cache.queryCache(request);
      expect(nothing.isNothing()).toBe(true);
    })
  })
});
