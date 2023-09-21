import React, { createContext, useState } from 'react';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
