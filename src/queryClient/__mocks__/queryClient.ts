import {
    AbortSearch,
    AddDocumentsToStoreRequest,
    GetIndexValuesRequest,
    QueryRequest,
    QueryResponse,
    StoreId,
} from '@browser-search/browser-search';

import { buildIndexValuesCache, buildQueryCache } from '../queryCache';
import { buildSubscriber } from '../subscriber';

export const buildQueryClient = () => {
  const queryCache = buildQueryCache();
  const indexValuesCache = buildIndexValuesCache();
  const subscriber = buildSubscriber();

  const mutateStore = <T>(mutationFunction: (storeId: StoreId) => Promise<T>) => (storeId: StoreId): Promise<T> => (
    mutationFunction(storeId)
      .then(result => {
        [queryCache, indexValuesCache].forEach(cache => cache.deleteStoreCache(storeId));
        subscriber.notifyStoreChange(storeId);
        return result;
      })
  )


  const queryStore = <Document>(request: QueryRequest<Document>): [Promise<QueryResponse<Document>>, AbortSearch] => {
    const maybeCachedSearchResponsePromise = queryCache.queryCache<Document>(request);

    const response: QueryResponse<Document, string> = {
      documents: [] as Document[],
      stats: {},
      numberOfDocuments: 0,  
      _cacheStatus_: "none",
    }
    
    return (
      maybeCachedSearchResponsePromise.caseOf({
        Just: searchResponse => [searchResponse, () => {}],
        Nothing: () => {
          const [queryResponsePromise, abort] = [Promise.resolve(response), jest.fn()];
          queryCache.addQueryToCache<Document>(request, queryResponsePromise);
          return [queryResponsePromise, abort];
        }
      })
    )
  }

  const queryIndex = <Value extends IDBValidKey>(request: GetIndexValuesRequest): Promise<Value[]> => {
    const maybeCachedResponsePromise = indexValuesCache.queryCache<Value>(request);
    const response: Value[] = [];

    return (
      maybeCachedResponsePromise.caseOf({
        Just: indexValues => indexValues,
        Nothing: () => {
          const indexValuesPromise = Promise.resolve(response);
          indexValuesCache.addQueryToCache<Value>(request, indexValuesPromise);
          return indexValuesPromise;
        }
      })
    )
  }

  const createStore = jest.fn(() => Promise.resolve());

  const deleteStore = mutateStore(jest.fn(() => Promise.resolve()));

  const addDocumentsToStore = <Document>(request: AddDocumentsToStoreRequest<Document>) => mutateStore(jest.fn(() => Promise.resolve()))(request.storeId);

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


 