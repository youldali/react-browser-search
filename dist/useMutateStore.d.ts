import * as BS from 'browser-search';
export declare const useMutateStore: <T>(storeId: BS.StoreId) => {
    addDataToStore: (data: T[]) => Promise<void>;
    createStore: (indexConfig: BS.SimplifiedIndexConfig<T>) => (keyPath: keyof T) => Promise<void>;
    deleteStore: () => Promise<void>;
};
