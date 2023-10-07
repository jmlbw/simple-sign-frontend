import React, { createContext, useState, useContext } from 'react';

const initialState = {
  viewItem: ['send'],
  searchBtnStatus: false,
  shouldFetchDocs: false,
  searchInput: '',
  view: false,
};

const detailSearchInitState = {
  searchDate: '',
  startDate: null,
  endDate: null,
  searchTitle: '',
  searchContent: '',
  searchDept: '',
  searchWriter: '',
  searchApprovUser: '',
  searchApprovState: '',
  searchDocForm: '',
  searchDocNumber: '',
};

const ApprovalBoxContext = createContext();

export const ApprovalBoxProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [detailSearchState, setDetailSearchState] = useState(
    detailSearchInitState
  );

  return (
    <ApprovalBoxContext.Provider
      value={{
        state,
        setState,
        detailSearchState,
        setDetailSearchState,
        detailSearchInitState,
      }}
    >
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
