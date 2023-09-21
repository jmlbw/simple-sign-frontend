import SelectBox from '../common/Selectbox';
import SearchDate from './SearchDate';
import styles from '../../styles/components/ApprovalBox/ApprovalRightHeader.module.css';
import { useContext, useState } from 'react';
import Search from './Search';
import SearchContext from '../../contexts/SearchContext';
import React from 'react';

function ApprovalRightHeader() {
  const [isDropdownView, setDropdownView] = useState(false);
  const { view, setView } = useContext(SearchContext);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
    setView(!view);
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
      <SelectBox
        className={styles.selectBox}
        selectList={list}
        height="27"
        width="85"
      ></SelectBox>
      <SearchDate></SearchDate>
      <Search></Search>
      <div className={styles.container} onBlur={handleBlurContainer}>
        <label onClick={handleClickContainer}>
          <button className={styles.dropdownBtn}>
            {isDropdownView ? '▲' : '▼'}
          </button>
        </label>
      </div>
    </div>
  );
}
export default ApprovalRightHeader;
