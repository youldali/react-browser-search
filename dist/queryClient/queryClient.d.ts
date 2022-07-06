import * as BS from 'browser-search';
import { IndexRequest } from '../indexRequest';
export declare const buildQueryClient: () => {
    queryStore: <Document_1>(request: BS.Request<Document_1, string>) => [Promise<{
        documents: Document_1[];
        stats: Record<string, BS.NextFilterStateStat>;
        numberOfDocuments: number;
        _cacheStatus_: BS.CacheStatus;
    }>, BS.AbortSearch];
    queryIndex: <Value extends IDBValidKey>(request: IndexRequest) => Promise<Value[]>;
    createStore: <T>(storeName: string) => (indexConfig: BS.SimplifiedIndexConfig<T>) => (keyPath: keyof T) => Promise<void>;
    deleteStore: (storeId: BS.StoreId) => Promise<void>;
    addDataToStore: <Document_2>(storeId: BS.StoreId) => (data: Document_2[]) => Promise<void>;
    subscribeToStoreChange: (storeId: string) => (listener: import("./subscriber/subscriber").Listener) => void;
    unsubscribeToStoreChange: (storeId: string) => (listenerToRemove: import("./subscriber/subscriber").Listener) => void;
};
