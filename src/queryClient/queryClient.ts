import * as BS from 'browser-search';

import { IndexRequest } from '../indexRequest';

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


  const queryStore = <Document>(request: BS.Request<Document>): [Promise<BS.SearchResponse<Document>>, BS.AbortSearch] => {
    const maybeCachedSearchResponsePromise = queryCache.queryCache<Document>(request);

    return (
      maybeCachedSearchResponsePromise.caseOf({
        Just: searchResponse => [searchResponse, () => {}],
        Nothing: () => {
          const [searchResponsePromise, abort] = BS.searchStore(request);
          queryCache.addQueryToCache<Document>(request, searchResponsePromise);
          return [searchResponsePromise, abort];
        }
      })
    )
  }

  const queryIndex = <Value extends IDBValidKey>(request: IndexRequest): Promise<Value[]> => {
    const maybeCachedResponsePromise = indexValuesCache.queryCache<Value>(request);

    return (
      maybeCachedResponsePromise.caseOf({
        Just: indexValues => indexValues,
        Nothing: () => {
          const indexValuesPromise = BS.getAllValuesOfProperty<Value>(request.storeId)(request.indexId);
          indexValuesCache.addQueryToCache<Value>(request, indexValuesPromise);
          return indexValuesPromise;
        }
      })
    )
  }

  const createStore = BS.createStore;

  const deleteStore = mutateStore(BS.deleteStore);

  const addDataToStore = <Document>(storeId: BS.StoreId) => (data: Document[]) => mutateStore((storeId: BS.StoreId) => BS.addDocumentsToStore<Document>(storeId)(data))(storeId);

  const subscribeToStoreChange = subscriber.addStoreListener;

  const unsubscribeToStoreChange = subscriber.removeStoreListener;

  return {
    queryStore,
    queryIndex,
    createStore,
    deleteStore,
    addDataToStore,
    subscribeToStoreChange,
    unsubscribeToStoreChange,
  }
}


 