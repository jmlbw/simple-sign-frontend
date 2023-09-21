import React, { createContext, useContext, useState } from 'react';

const searchInitState = { id: 0, compName: '', formName: '', status: 1 };

const setInitState = {
  compList: [],
  statusList: [
    { name: '사용', value: 1 },
    { name: '미사용', value: 0 },
  ],
};

const detailInitState = {
  code: '',
  compName: '',
  formName: '',
  scope: [],
  defaultForm: '',
  mainForm: '',
  status: '',
};

const FormManageContext = createContext();

const FormManageProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(searchInitState);
  const [setData, setSetData] = useState(setInitState);
  const [detailData, setDetailData] = useState(detailInitState);

  return (
    <FormManageContext.Provider
      value={{
        searchData,
        setSearchData,
        setData,
        setSetData,
        detailData,
        setDetailData,
      }}
    >
      {children}
    </FormManageContext.Provider>
  );
};

const useFormManage = () => {
  const context = useContext(FormManageContext);
  if (!context) {
    throw new Error('useFormManage must be used within a FormManageProvider');
  }
  return context;
};

export { useFormManage, FormManageProvider };
