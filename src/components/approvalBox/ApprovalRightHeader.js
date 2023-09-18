import SelectBox from '../common/Selectbox';
import SearchDate from './SearchDate';
import styles from '../../styles/components/ApprovalBox/ApprovalRightHeader.module.css';
import { useState } from 'react';

function ApprovalRightHeader() {
  const [isDropdownView, setDropdownView] = useState(false);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };
  const list = [
    { name: '기안일' },
    { name: '상신일' },
    // 다른 옵션들도 필요한 경우 추가 가능
  ];
  return (
    <div className={styles.list}>
      <SelectBox selectList={list} height="27" width="90"></SelectBox>
      <SearchDate></SearchDate>
      <div className="container" onBlur={handleBlurContainer}>
        <label onClick={handleClickContainer}>
          <button>{isDropdownView ? '▲' : '▼'}</button>
        </label>
      </div>
    </div>
  );
}
export default ApprovalRightHeader;
