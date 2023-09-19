import SearchBox from '../formManage/searchBox/SearchBox';
import styles from '../../styles/pages/ApprovalBoxViewPage.module.css';

function SearchDetailBox() {
  let searchOptionList = [
    {
      asset1: 'select',
      asset2: 'date',
      data: [
        { id: 1, name: '도착일' },
        { id: 2, name: '기안일' },
      ],
    },
    {
      asset1: '제목',
      asset2: 'text',
      data: [],
    },
    { asset1: '내용', asset2: 'text', data: [] },
    { asset1: '기안부서', asset2: 'text', data: [] },
    { asset1: '기안자', asset2: 'text', data: [] },
    { asset1: '결재자', asset2: 'text', data: [] },
    {
      asset1: '결재상태',
      asset2: 'select',
      data: [
        { id: 1, name: '전체' },
        { id: 2, name: '진행' },
        { id: 3, name: '종결' },
        { id: 4, name: '반려' },
      ],
    },
    { asset1: '문서양식', asset2: 'text', data: [] },
    { asset1: '문서번호', asset2: 'text', data: [] },
  ];
  return (
    <div className={styles}>
      <SearchBox searchOptions={searchOptionList} />
    </div>
  );
}
export default SearchDetailBox;
