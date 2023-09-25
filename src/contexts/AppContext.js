import React, { createContext, useState, useEffect, useContext } from 'react';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: JSON.parse(sessionStorage.getItem('user')) || null,
    isLoggedIn: JSON.parse(sessionStorage.getItem('isLoggedIn')) || false,
  });

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(state.user));
    sessionStorage.setItem('isLoggedIn', JSON.stringify(state.isLoggedIn));
  }, [state.isLoggedIn]);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
