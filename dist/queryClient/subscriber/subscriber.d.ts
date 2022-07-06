import * as BS from 'browser-search';
export declare type Listener = <Trigger extends 'store-mutation'>({ trigger }: {
    trigger: Trigger;
}) => void;
export declare type StoreListeners = Map<BS.StoreId, Listener[]>;
export declare const buildSubscriber: () => {
    notifyStoreChange: (storeId: BS.StoreId) => void;
    addStoreListener: (storeId: BS.StoreId) => (listener: Listener) => void;
    removeStoreListener: (storeId: BS.StoreId) => (listenerToRemove: Listener) => void;
};
