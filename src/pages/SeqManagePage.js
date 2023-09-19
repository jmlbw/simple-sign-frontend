import { useContext, useEffect } from 'react';
import '../styles/pages/SeqManagePage.css';
import SearchBox from '../components/formManage/searchBox/SearchBox';
import FormList from '../components/formManage/formList/FormList';
import PageContext from '../contexts/PageContext';
import { columns, fields, rows } from '../assets/datas/seq_sample_data';
import SeqDetail from '../components/seqManage/seqDetail/SeqDetail';

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
      asset1: '문서채번명',
      asset2: 'text',
      data: [],
    },
    { asset1: '코드', asset2: 'text', data: [] },
  ];

  const { state, setState } = useContext(PageContext);

  useEffect(() => {
    setState({ ...state, curPage: 'SeqManage' });
  }, []);
  const test = () => {
    console.log(state);
  };

  return (
    <div className="form_manage_container">
      <SearchBox searchOptions={searchOptionList}></SearchBox>
      <div className="form_data_area">
        <div className="form_list_area">
          <FormList
            title={'채번목록'}
            columns={columns}
            fields={fields}
            rows={rows}
          />
        </div>
        <div className="form_detail_area">
          <SeqDetail title={'문서채번상세'} />
          <SeqDetail title={'채번설정'} />
        </div>
      </div>
      <button onClick={test}>test</button>
    </div>
  );
}
