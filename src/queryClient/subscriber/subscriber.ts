import * as BS from '@browser-search/browser-search';

export type Listener = <Trigger extends 'store-mutation' >({trigger}: {trigger: Trigger}) => void; 
export type StoreListeners = Map<BS.StoreId, Listener[]>;


export const buildSubscriber = () => {
  let storeListeners: StoreListeners = new Map();

  const notifyStoreChange = (storeId: BS.StoreId): void => {
    const listeners = storeListeners.get(storeId) ?? [];
    listeners.forEach(callback => callback({trigger: 'store-mutation'}))
  }

  const addStoreListener = (storeId: BS.StoreId) => (listener: Listener): void => {
    const listeners = storeListeners.get(storeId) ?? [];
    listeners.push(listener)
    storeListeners.set(storeId, listeners);
  }

  const removeStoreListener = (storeId: BS.StoreId) => (listenerToRemove: Listener): void => {
    const listeners = storeListeners.get(storeId) ?? [];
    const filteredListeners = listeners.filter(listener => listener !== listenerToRemove );
    storeListeners.set(storeId, filteredListeners);
  }

  return {
    notifyStoreChange,
    addStoreListener,
    removeStoreListener,
  }
}


 