import { useContext, useEffect } from 'react';
import '../styles/pages/FormManagePage.css';
import SearchBox from '../components/formManage/searchBox/SearchBox';
import FormList from '../components/formManage/formList/FormList';
import FormDetail from '../components/formManage/formDetail/FormDetail';
import PageContext from '../contexts/PageContext';
import { columns, fields, rows } from '../assets/datas/form_sample_data';

export default function FormManagePage() {
  let searchOptionList = [
    {
      asset1: '회사',
      asset2: 'select',
      data: [
        { id: 1, name: '(주) 더존' },
        { id: 2, name: '비트컴퓨터' },
      ],
    },
    {
      asset1: '사용여부',
      asset2: 'select',
      data: [
        { id: 1, name: '예' },
        { id: 2, name: '아니요' },
      ],
    },
    { asset1: '양식명', asset2: 'text', data: [] },
    {
      asset1: 'select',
      asset2: 'date',
      data: [
        { id: 1, name: '결재일' },
        { id: 2, name: '수정일' },
      ],
    },
  ];

  const { state, setState } = useContext(PageContext);
  useEffect(() => {
    setState({ ...state, curPage: 'FormManage' });
  }, []);
  return (
    <div className="form_manage_container">
      <SearchBox searchOptions={searchOptionList}></SearchBox>
      <div className="form_data_area">
        <div className="form_list_area">
          <FormList
            title={'양식목록'}
            columns={columns}
            fields={fields}
            rows={rows}
          />
        </div>
        <div className="form_detail_area">
          <FormDetail title={'양식상세'} />
        </div>
      </div>
    </div>
  );
}
