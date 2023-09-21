import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';
import { SearchContextProvider } from './SearchContext';
import { FormManageProvider } from './FormManageContext';
import React from 'react';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>
        <SearchContextProvider>
          <FormManageProvider>{children}</FormManageProvider>
        </SearchContextProvider>
      </PageProvier>
    </AppProvider>
  );
}
