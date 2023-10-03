import SelectBox from '../common/Selectbox';
import SearchDate from './SearchDate';
import styles from '../../styles/components/ApprovalBox/ApprovalRightHeader.module.css';
import React, { useContext, useState } from 'react';
import Search from './Search';
import SearchContext from '../../contexts/SearchContext';
import { useApprovalBox } from '../../contexts/ApprovalBoxContext';

function ApprovalRightHeader() {
  const [isDropdownView, setDropdownView] = useState(false);
  const { view, setView } = useContext(SearchContext);

  const { state, setState } = useApprovalBox();

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
    setView(!view);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <div className={styles.list}>
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
