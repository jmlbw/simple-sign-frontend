import { useContext, useEffect } from 'react';
import '../styles/pages/FormManagePage.css';
import SearchBox from '../components/formManage/searchBox/SearchBox';
import FormList from '../components/formManage/formList/FormList';
import FormDetail from '../components/formManage/formDetail/FormDetail';
import PageContext from '../contexts/PageContext';

export default function FormManagePage() {
  const { state, setState } = useContext(PageContext);
  useEffect(() => {
    setState({ ...state, curPage: 'FormManage' });
  }, []);
  return (
    <div className="form_manage_container">
      <SearchBox></SearchBox>
      <div className="form_data_area">
        <div className="form_list_area">
          <FormList />
        </div>
        <div className="form_detail_area">
          <FormDetail />
        </div>
      </div>
    </div>
  );
}
