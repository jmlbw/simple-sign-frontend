import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';
import { SearchContextProvider } from './SearchContext';
import { FormManageProvider } from './FormManageContext';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>
        <SearchContextProvider>{children}</SearchContextProvider>
        <FormManageProvider>{children}</FormManageProvider>
      </PageProvier>
    </AppProvider>
  );
}
