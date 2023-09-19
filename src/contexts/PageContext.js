import React, { createContext, useState } from 'react';

const initialState = {
  curPage: 'Home',
};

const PageContext = createContext();

export const PageProvier = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <PageContext.Provider value={{ state, setState }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
