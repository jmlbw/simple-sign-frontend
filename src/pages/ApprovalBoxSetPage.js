import React from 'react';
import InnerBox from '../components/common/InnerBox';
import styled from '../styles/pages/ApprovalBoxSetPage.module.css';
import Button from '../components/common/Button';
import ViewApprovalBoxList from '../components/approvBoxSet/ViewApprovBoxList';
import DetailApprovalBox from '../components/approvBoxSet/DetailApprovalBox';

function ApprovalBoxSetPage() {
  return (
    <div className={styled.container}>
      <ViewApprovalBoxList />
      <DetailApprovalBox />
    </div>
  );
}
export default ApprovalBoxSetPage;
