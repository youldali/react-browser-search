/// <reference types="jest" />
import { AbortSearch, Request, SearchResponse, StoreId } from 'browser-search';
import { IndexRequest } from '../../indexRequest';
export declare const buildQueryClient: () => {
    queryStore: <Document_1>(request: Request<Document_1, string>) => [Promise<{
        documents: Document_1[];
        stats: Record<string, import("browser-search").NextFilterStateStat>;
        numberOfDocuments: number;
        _cacheStatus_: import("browser-search").CacheStatus;
    }>, AbortSearch];
    queryIndex: <Value extends IDBValidKey>(request: IndexRequest) => Promise<Value[]>;
    createStore: jest.Mock<Promise<void>, []>;
    deleteStore: (storeId: StoreId) => Promise<void>;
    addDataToStore: <Document_2>(storeId: StoreId) => (data: Document_2[]) => Promise<void>;
    subscribeToStoreChange: (storeId: string) => (listener: import("../subscriber/subscriber").Listener) => void;
    unsubscribeToStoreChange: (storeId: string) => (listenerToRemove: import("../subscriber/subscriber").Listener) => void;
};
