import React from 'react';
import ApprovalBoxSearch from '../../components/approvBoxSet/ApprovalBoxSearch';
import ApprovalBoxList from '../../components/approvBoxSet/ApprovalBoxList';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';
import Button from '../../components/common/Button';
import InnerBox from '../common/InnerBox';

function ViewApprovalBoxList() {
  return (
    <InnerBox
      height="100%"
      width="50%"
      font_size="14px"
      text="결재함 목록"
      titleChildren={<Button label={'추가'} btnStyle={'gray_btn'} />}
    >
      <ApprovalBoxSearch></ApprovalBoxSearch>
      <div className={styled.boxlist}>
        <ApprovalBoxList />
      </div>
    </InnerBox>
  );
}
export default ViewApprovalBoxList;
