import { QueryRequest } from '@browser-search/browser-search';

import { createFixture } from './createFixture';

const request: QueryRequest<any, string> = {
  storeId: 'storeId',
  filterConfig: [],
  filtersApplied: [],
};

export const getRequestFixture = <Document>(overrides?: Partial<QueryRequest<Document>>) => createFixture<QueryRequest<Document>>(request)(overrides)
