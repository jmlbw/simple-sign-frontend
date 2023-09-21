import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';
import { SearchContextProvider } from './SearchContext';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>
        <SearchContextProvider>{children}</SearchContextProvider>
      </PageProvier>
    </AppProvider>
  );
}
