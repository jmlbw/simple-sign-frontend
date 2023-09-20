import RowRadioButtonsGroup from '../components/approvalBox/RowRadioButtonsGroup';
import SearchDetailBox from '../components/approvalBox/SearchDetailBox';
import ViewDocBox from '../components/approvalBox/ViewDocBox';
import InnerBox from '../components/common/InnerBox';
import styles from '../styles/pages/ApprovalBoxViewPage.module.css';
import React from 'react';

function ApprovalBoxViewPage() {
  return (
    <div className={styles.bbb}>
      <InnerBox height={'100%'}>
        <div className={styles.aaa}>
          <div className={styles.searchDetailbox}>
            <SearchDetailBox></SearchDetailBox>
          </div>
          <div className={styles.radiobuttonsBox}>
            <div className={styles.radiogroup}>
              <RowRadioButtonsGroup></RowRadioButtonsGroup>
            </div>
          </div>
          <ViewDocBox></ViewDocBox>
        </div>
      </InnerBox>
    </div>
  );
}
export default ApprovalBoxViewPage;
