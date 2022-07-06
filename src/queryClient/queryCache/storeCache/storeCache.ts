import * as BS from 'browser-search';
import { Just, Maybe, Nothing } from 'purify-ts/Maybe';

type StoreCache<CacheKey, CacheValue> = Map<CacheKey, CacheValue>;
type GlobalCache<CacheKey, CacheValue> = Map<BS.StoreId, StoreCache<CacheKey, CacheValue>>

export const buildStoreCache = () => {
  const globalCache: GlobalCache<unknown, unknown> = new Map();

  const queryCache = <CacheKey, CacheValue>(storeId: BS.StoreId, cacheKey: CacheKey): Maybe<CacheValue> => {
    const storeCache = globalCache.get(storeId);
    return (
      storeCache === undefined ? Nothing
      : storeCache.has(cacheKey) ? Just(storeCache.get(cacheKey) as CacheValue) 
      : Nothing
    );
  }

  const addValueToStoreCache = <CacheKey, CacheValue>(storeId: BS.StoreId, key: CacheKey, value: CacheValue): void => {
    const storeCache = globalCache.get(storeId) ?? new Map() as StoreCache<CacheKey, CacheValue>;
    storeCache.set(key, value);
    globalCache.set(storeId, storeCache);
  }

  const deleteStoreCache = (storeId: BS.StoreId): void => {
    globalCache.delete(storeId)
  }

  const deleteKeyFromStore = <CacheKey>(storeId: BS.StoreId, key: CacheKey): void => {
    const storeCache = globalCache.get(storeId);
    if(storeCache) {
      storeCache.delete(key);
    }
  }

  return {
    queryCache,
    addValueToStoreCache,
    deleteStoreCache,
    deleteKeyFromStore,
  }
}
