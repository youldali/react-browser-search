import { getRequestFixture } from '../__fixtures__';
import { areRequestsEqual } from '../request';

describe ('areRequestsEqual', () => {

  it('returns true if they are deep equal', async () => {
    const requestA = getRequestFixture();
    const requestB = getRequestFixture();
    
    expect(areRequestsEqual(requestA, requestB)).toBe(true);
  })

  it('returns false if they are not deep equal', async () => {
    const requestA = getRequestFixture();
    const requestB = getRequestFixture({
      storeId: 'random-store',
    });
    
    expect(areRequestsEqual(requestA, requestB)).toBe(false);
  })

});
