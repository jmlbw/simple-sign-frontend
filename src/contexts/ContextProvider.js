import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';
import { SearchContextProvider } from './SearchContext';
import { FormManageProvider } from './FormManageContext';
import { ApprovalBoxProvider } from './ApprovalBoxContext';
import { SeqManageProvider } from './SeqManageContext';
import React from 'react';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>
        <SearchContextProvider>
          <FormManageProvider>
            <ApprovalBoxProvider>
              <SeqManageProvider>{children}</SeqManageProvider>
            </ApprovalBoxProvider>
          </FormManageProvider>
        </SearchContextProvider>
      </PageProvier>
    </AppProvider>
  );
}
