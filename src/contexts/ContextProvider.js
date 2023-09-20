import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';
import React from 'react';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>{children}</PageProvier>
    </AppProvider>
  );
}
