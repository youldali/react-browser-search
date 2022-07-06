import React from 'react';

import { buildQueryClient } from '../queryClient';

const queryClient = buildQueryClient();
export const BrowserSearchContext = React.createContext(queryClient);

export const BrowserSearchProvider = ({
  children,
}: {children: React.ReactNode}) => (
  <BrowserSearchContext.Provider value={queryClient}>
    {children}
  </BrowserSearchContext.Provider>
)