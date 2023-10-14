import React, { createContext, useState, useEffect, useContext } from 'react';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
  }, [state.isLoggedIn]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useFormManage must be used within a FormManageProvider');
  }
  return context;
};
export default AppContext;
