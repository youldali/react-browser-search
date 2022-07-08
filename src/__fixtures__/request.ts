import { Request } from '@browser-search/browser-search';

import { createFixture } from './createFixture';

const request: Request<any, string> = {
  storeId: 'storeId',
  filterConfig: [],
  filtersApplied: [],
};

export const getRequestFixture = <Document>(overrides?: Partial<Request<Document>>) => createFixture<Request<Document>>(request)(overrides)
