import { buildSubscriber } from '../subscriber';

describe ('buildSubscriber', () => {

  const storeId = 'storeId';

  describe('addStoreListener > notifyStoreChange', () => {
    it('adds a listener and calls the callback function for the specific store', () => {
      const subscriber = buildSubscriber();
      const listener1 = jest.fn();
      const listener2 = jest.fn();
      const listenerA = jest.fn();

      subscriber.addStoreListener(storeId)(listener1);
      subscriber.addStoreListener(storeId)(listener2);
      subscriber.addStoreListener('otherStore')(listenerA);
      subscriber.notifyStoreChange(storeId);

      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).toHaveBeenCalledTimes(1);
      expect(listenerA).toHaveBeenCalledTimes(0);
    })
  })

  describe('removeStoreListener', () => {
    it('removes a listener', () => {
      const subscriber = buildSubscriber();
      const listener1 = jest.fn();
      const listener2 = jest.fn();

      subscriber.addStoreListener(storeId)(listener1);
      subscriber.addStoreListener(storeId)(listener2);
      subscriber.removeStoreListener(storeId)(listener2)
      subscriber.notifyStoreChange(storeId);

      expect(listener1).toHaveBeenCalledTimes(1);
      expect(listener2).toHaveBeenCalledTimes(0);
    })
  })

});
