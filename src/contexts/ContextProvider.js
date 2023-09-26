import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';
import { SearchContextProvider } from './SearchContext';
import { FormManageProvider } from './FormManageContext';
import { ApprovalBoxProvider } from './ApprovalBoxContext';
import React from 'react';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>
        <SearchContextProvider>
          <FormManageProvider>
            <ApprovalBoxProvider>{children}</ApprovalBoxProvider>
          </FormManageProvider>
        </SearchContextProvider>
      </PageProvier>
    </AppProvider>
  );
}
