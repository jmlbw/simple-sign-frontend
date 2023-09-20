import React, { useContext, useEffect } from 'react';
import '../styles/pages/SeqManagePage.css';
import SearchBox from '../components/formManage/searchBox/SearchBox';
import FormList from '../components/formManage/formList/FormList';
import FormDetail from '../components/formManage/formDetail/FormDetail';
import PageContext from '../contexts/PageContext';

export default function FormManagePage() {
  const { state, setState } = useContext(PageContext);

  useEffect(() => {
    setState({ ...state, curPage: 'SeqManage' });
  }, []);
  const test = () => {
    console.log(state);
  };

  return (
    <div className="form_manage_container">
      {/* <SearchBox></SearchBox>
      <div className="form_data_area">
        <div className="form_list_area">
          <FormList />
        </div>
        <div className="form_detail_area">
          <FormDetail />
        </div>
      </div> */}
      <button onClick={test}>test</button>
    </div>
  );
}
