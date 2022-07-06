import { buildStoreCache } from '../storeCache';

describe ('buildStoreCache', () => {
  
  const storeId = 'storeId';

  describe('addValueToStoreCache', () => {
    it('adds a new value to the cache store and creates it if it does not exist', () => {
      const cache = buildStoreCache();

      cache.addValueToStoreCache(storeId, 'key', 1);
      expect(cache.queryCache(storeId, 'key').extract()).toBe(1);

      cache.addValueToStoreCache(storeId, 'key2', 2);
      expect(cache.queryCache(storeId, 'key2').extract()).toBe(2);
    })
  })

  describe('queryCache', () => {
    it('gets the value or return Nothing if it does not exist', () => {
      const cache = buildStoreCache();

      const nothing = cache.queryCache(storeId, 'key');
      expect(nothing.isNothing()).toBe(true);

      cache.addValueToStoreCache(storeId, 'key', 1);
      const just = cache.queryCache(storeId, 'key');
      expect(just.extract()).toBe(1);
    })
  })

  describe('deleteStoreCache', () => {
    it('deletes the cache associated to a store', () => {
      const cache = buildStoreCache();
      
      cache.deleteStoreCache(storeId);
      cache.addValueToStoreCache(storeId, 'key', 1);
      cache.deleteStoreCache(storeId);

      const nothing = cache.queryCache(storeId, 'key');
      expect(nothing.isNothing()).toBe(true);
    })
  })

  describe('deleteKeyFromStore', () => {
    it('deletes the key from the store', () => {
      const cache = buildStoreCache();
      
      cache.deleteKeyFromStore(storeId, 'key');
      cache.addValueToStoreCache(storeId, 'key', 1);
      cache.deleteKeyFromStore(storeId, 'key');

      const nothing = cache.queryCache(storeId, 'key');
      expect(nothing.isNothing()).toBe(true);
    })
  })

});