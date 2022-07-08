import { SearchResponse } from '@browser-search/browser-search';

import { createFixture } from './createFixture';

const response: SearchResponse<any, string> = {
  documents: [],
  stats: {},
  numberOfDocuments: 0,
  _cacheStatus_: 'none',
};

export const getResponseFixture = <Document>(overrides?: Partial<SearchResponse<Document>>) => createFixture<SearchResponse<Document>>(response)(overrides)
