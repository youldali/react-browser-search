import * as BS from 'browser-search';
import { Maybe } from 'purify-ts/Maybe';
export declare const buildQueryCache: () => {
    queryCache: <Document_1>(request: BS.Request<Document_1, string>) => Maybe<Promise<{
        documents: Document_1[];
        stats: Record<string, BS.NextFilterStateStat>;
        numberOfDocuments: number;
        _cacheStatus_: BS.CacheStatus;
    }>>;
    addQueryToCache: <Document_2>(request: BS.Request<Document_2, string>, query: Promise<{
        documents: Document_2[];
        stats: Record<string, BS.NextFilterStateStat>;
        numberOfDocuments: number;
        _cacheStatus_: BS.CacheStatus;
    }>) => void;
    deleteStoreCache: (storeId: BS.StoreId) => void;
};
