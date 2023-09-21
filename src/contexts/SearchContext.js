// SearchContext.js
import React, { createContext, useContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
  const [view, setView] = useState(false);

  return (
    <SearchContext.Provider value={{ view, setView }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
