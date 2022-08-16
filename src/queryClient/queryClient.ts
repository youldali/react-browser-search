import * as BS from '@browser-search/browser-search';

import { buildIndexValuesCache, buildQueryCache } from './queryCache';
import { buildSubscriber } from './subscriber';

export const buildQueryClient = () => {
  const queryCache = buildQueryCache();
  const indexValuesCache = buildIndexValuesCache();
  const subscriber = buildSubscriber();

  const mutateStore = <T>(mutationFunction: (storeId: BS.StoreId) => Promise<T>) => (storeId: BS.StoreId): Promise<T> => (
    mutationFunction(storeId)
      .then(result => {
        [queryCache, indexValuesCache].forEach(cache => cache.deleteStoreCache(storeId));
        subscriber.notifyStoreChange(storeId);
        return result;
      })
  )


  const queryStore = <Document>(request: BS.QueryRequest<Document>): [Promise<BS.QueryResponse<Document>>, BS.AbortSearch] => {
    const maybeCachedSearchResponsePromise = queryCache.queryCache<Document>(request);

    return (
      maybeCachedSearchResponsePromise.caseOf({
        Just: searchResponse => [searchResponse, () => {}],
        Nothing: () => {
          const [searchResponsePromise, abort] = BS.queryStore(request);
          queryCache.addQueryToCache<Document>(request, searchResponsePromise);
          return [searchResponsePromise, abort];
        }
      })
    )
  }

  const queryIndex = <Value extends IDBValidKey>(request: BS.GetIndexValuesRequest): Promise<Value[]> => {
    const maybeCachedResponsePromise = indexValuesCache.queryCache<Value>(request);

    return (
      maybeCachedResponsePromise.caseOf({
        Just: indexValues => indexValues,
        Nothing: () => {
          const indexValuesPromise = BS.getIndexValues<Value>(request);
          indexValuesCache.addQueryToCache<Value>(request, indexValuesPromise);
          return indexValuesPromise;
        }
      })
    )
  }

  const createStore = BS.createStore;

  const deleteStore = mutateStore((storeId) => BS.deleteStore({storeId}));

  const addDocumentsToStore = <TDocument>(request: BS.AddDocumentsToStoreRequest<TDocument>) => mutateStore((_: BS.StoreId) => BS.addDocumentsToStore<TDocument>(request))(request.storeId);

  const subscribeToStoreChange = subscriber.addStoreListener;

  const unsubscribeToStoreChange = subscriber.removeStoreListener;

  return {
    queryStore,
    queryIndex,
    createStore,
    deleteStore,
    addDocumentsToStore,
    subscribeToStoreChange,
    unsubscribeToStoreChange,
  }
}


 