import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';
import { SearchContextProvider } from './SearchContext';
import { FormManageProvider } from './FormManageContext';
import { ApprovalBoxProvider } from './ApprovalBoxContext';
import { SeqManageProvider } from './SeqManageContext';
import { LoadingProvider } from './LoadingContext';
import React from 'react';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>
        <LoadingProvider>
          <SearchContextProvider>
            <FormManageProvider>
              <ApprovalBoxProvider>
                <SeqManageProvider>{children}</SeqManageProvider>
              </ApprovalBoxProvider>
            </FormManageProvider>
          </SearchContextProvider>
        </LoadingProvider>
      </PageProvier>
    </AppProvider>
  );
}
