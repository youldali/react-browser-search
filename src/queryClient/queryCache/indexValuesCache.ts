import * as BS from '@browser-search/browser-search';
import { Maybe } from 'purify-ts/Maybe';

import { buildStoreCache } from './storeCache';

type IndexId = string;

export const buildIndexValuesCache = () => {
  const responseCache = buildStoreCache();
  const pendingQueryCache = buildStoreCache();

  const queryCache = <Value extends IDBValidKey>({storeId, field}: BS.GetIndexValuesRequest): Maybe<Promise<Value[]>> => {
    return (
      responseCache
        .queryCache<IndexId, Value[]>(storeId, field)
        .map(response => Promise.resolve(response))
        .alt(pendingQueryCache.queryCache<IndexId, Promise<Value[]>>(storeId, field))
    )
  }

  const addQueryToCache = <Value extends IDBValidKey>({storeId, field}: BS.GetIndexValuesRequest, query: Promise<Value[]>): void => {
    pendingQueryCache.addValueToStoreCache(storeId, field, query);

    query
      .then(queryResponse => {
        // if not in the cache, it means cache has been emptied in the meantime (because of store mutation) so it's obsolete
        if(pendingQueryCache.queryCache(storeId, field)) {
          responseCache.addValueToStoreCache(storeId, field, queryResponse);
        }
      })
      .finally(() => {
        pendingQueryCache.deleteKeyFromStore(storeId, field)
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
