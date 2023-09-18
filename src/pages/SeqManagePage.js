import '../styles/pages/SeqManagePage.css';
import SearchBox from '../components/formManage/searchBox/SearchBox';
import FormList from '../components/formManage/formList/FormList';
import FormDetail from '../components/formManage/formDetail/FormDetail';

export default function FormManagePage() {
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
