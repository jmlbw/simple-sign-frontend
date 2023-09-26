import React, { createContext, useState, useContext } from 'react';

const initialState = {
  viewItem: 'tempor',
};

const ApprovalBoxContext = createContext();

export const ApprovalBoxProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <ApprovalBoxContext.Provider value={{ state, setState }}>
      {children}
    </ApprovalBoxContext.Provider>
  );
};

export const useApprovalBox = () => {
  const context = useContext(ApprovalBoxContext);
  if (!context) {
    throw new Error('useApprovalBox must be used within a ApprovalBoxProvider');
  }
  return context;
};
