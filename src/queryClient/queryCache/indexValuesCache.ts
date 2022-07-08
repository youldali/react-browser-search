import * as BS from '@browser-search/browser-search';
import { Maybe } from 'purify-ts/Maybe';

import { buildStoreCache } from './storeCache';

type IndexId = string;

type Request = {
  storeId: string;
  indexId: IndexId;
}

export const buildIndexValuesCache = () => {
  const responseCache = buildStoreCache();
  const pendingQueryCache = buildStoreCache();

  const queryCache = <Value extends IDBValidKey>({storeId, indexId}: Request): Maybe<Promise<Value[]>> => {
    return (
      responseCache
        .queryCache<IndexId, Value[]>(storeId, indexId)
        .map(response => Promise.resolve(response))
        .alt(pendingQueryCache.queryCache<IndexId, Promise<Value[]>>(storeId, indexId))
    )
  }

  const addQueryToCache = <Value extends IDBValidKey>({storeId, indexId}: Request, query: Promise<Value[]>): void => {
    pendingQueryCache.addValueToStoreCache(storeId, indexId, query);

    query
      .then(queryResponse => {
        // if not in the cache, it means cache has been emptied in the meantime (because of store mutation) so it's obsolete
        if(pendingQueryCache.queryCache(storeId, indexId)) {
          responseCache.addValueToStoreCache(storeId, indexId, queryResponse);
        }
      })
      .finally(() => {
        pendingQueryCache.deleteKeyFromStore(storeId, indexId)
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
