import React from 'react';
export declare const BrowserSearchContext: React.Context<{
    queryStore: <Document_1>(request: import("browser-search").Request<Document_1, string>) => [Promise<{
        documents: Document_1[];
        stats: Record<string, import("browser-search").NextFilterStateStat>;
        numberOfDocuments: number;
        _cacheStatus_: import("browser-search").CacheStatus;
    }>, import("browser-search").AbortSearch];
    queryIndex: <Value extends IDBValidKey>(request: import("../indexRequest").IndexRequest) => Promise<Value[]>;
    createStore: <T>(storeName: string) => (indexConfig: import("browser-search").SimplifiedIndexConfig<T>) => (keyPath: keyof T) => Promise<void>;
    deleteStore: (storeId: string) => Promise<void>;
    addDataToStore: <Document_2>(storeId: string) => (data: Document_2[]) => Promise<void>;
    subscribeToStoreChange: (storeId: string) => (listener: import("../queryClient/subscriber/subscriber").Listener) => void;
    unsubscribeToStoreChange: (storeId: string) => (listenerToRemove: import("../queryClient/subscriber/subscriber").Listener) => void;
}>;
export declare const BrowserSearchProvider: ({ children, }: {
    children: React.ReactNode;
}) => JSX.Element;
