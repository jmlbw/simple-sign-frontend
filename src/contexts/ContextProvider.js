import { AppProvider } from './AppContext';
import { PageProvier } from './PageContext';

export default function ContextProvider({ children }) {
  return (
    <AppProvider>
      <PageProvier>{children}</PageProvier>
    </AppProvider>
  );
}
