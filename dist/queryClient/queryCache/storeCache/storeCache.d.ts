import * as BS from 'browser-search';
import { Maybe } from 'purify-ts/Maybe';
export declare const buildStoreCache: () => {
    queryCache: <CacheKey, CacheValue>(storeId: BS.StoreId, cacheKey: CacheKey) => Maybe<CacheValue>;
    addValueToStoreCache: <CacheKey_1, CacheValue_1>(storeId: BS.StoreId, key: CacheKey_1, value: CacheValue_1) => void;
    deleteStoreCache: (storeId: BS.StoreId) => void;
    deleteKeyFromStore: <CacheKey_2>(storeId: BS.StoreId, key: CacheKey_2) => void;
};
