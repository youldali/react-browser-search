import { QueryResponse } from '@browser-search/browser-search';

import { createFixture } from './createFixture';

const response: QueryResponse<any, string> = {
  documents: [],
  stats: {},
  numberOfDocuments: 0,
  _cacheStatus_: 'none',
};

export const getResponseFixture = <Document>(overrides?: Partial<QueryResponse<Document>>) => createFixture<QueryResponse<Document>>(response)(overrides)
