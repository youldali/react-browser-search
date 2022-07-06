import * as BS from 'browser-search';
import { Maybe } from 'purify-ts/Maybe';

import { hashRequest } from '../../request';

import { buildStoreCache } from './storeCache';

type RequestHash = string;

export const buildQueryCache = () => {
  const responseCache = buildStoreCache();
  const pendingQueryCache = buildStoreCache();

  const queryCache = <Document>(request: BS.Request<Document>): Maybe<Promise<BS.SearchResponse<Document>>> => {
    const requestHash = hashRequest(request);

    return (
      responseCache
        .queryCache<RequestHash, BS.SearchResponse<Document>>(request.storeId, requestHash)
        .map(response => Promise.resolve(response))
        .alt(pendingQueryCache.queryCache<RequestHash, Promise<BS.SearchResponse<Document>>>(request.storeId, requestHash))
    )
  }

  const addQueryToCache = <Document>(request: BS.Request<Document>, query: Promise<BS.SearchResponse<Document>>): void => {
    const requestHash = hashRequest(request);
    pendingQueryCache.addValueToStoreCache(request.storeId, requestHash, query);

    query
      .then(queryResponse => {
        // if not in the cache, it means cache has been emptied in the meantime (because of store mutation) so it's obsolete
        if(pendingQueryCache.queryCache(request.storeId, requestHash)) {
          responseCache.addValueToStoreCache(request.storeId, requestHash, queryResponse);
        }
      })
      .finally(() => {
        pendingQueryCache.deleteKeyFromStore(request.storeId, requestHash)
      })
  }

  const deleteStoreCache = (storeId: BS.StoreId): void => {
    responseCache.deleteStoreCache(storeId);
    pendingQueryCache.deleteStoreCache(storeId);
  }

  return {
    queryCache,
    addQueryToCache,
    deleteStoreCache,
  }
}
