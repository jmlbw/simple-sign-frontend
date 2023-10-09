import React, { createContext, useState, useContext } from 'react';

const initialState = {
  boxId: null,
};

const approvalBoxInit = {
  selectedCompany: null,
  boxName: null,
  viewItems: [],
  useStatus: false,
  menuUseArray: null,
  sortOrder: null,
};

const ApprovalBoxManageContext = createContext();

export const ApprovalBoxManageProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <ApprovalBoxManageContext.Provider value={{ state, setState }}>
      {children}
    </ApprovalBoxManageContext.Provider>
  );
};

export const useApprovalBoxManage = () => {
  const context = useContext(ApprovalBoxManageContext);
  if (!context) {
    throw new Error(
      'useApprovalBoxManage must be used within a ApprovalBoxManageProvider'
    );
  }
  return context;
};
