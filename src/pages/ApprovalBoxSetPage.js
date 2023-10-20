import React from 'react';
import styled from '../styles/pages/ApprovalBoxSetPage.module.css';
import ViewApprovalBoxList from '../components/approvBoxSet/ViewApprovBoxList';
import DetailApprovalBox from '../components/approvBoxSet/DetailApprovalBox';
import { useEffect } from 'react';
import { useState } from 'react';
import getUserCompId from '../apis/approvalBoxAPI/getUserCompId';

function ApprovalBoxSetPage() {
  const [compId, setCompId] = useState(null);

  async function fetchData() {
    try {
      const response = await getUserCompId();
      const fetchCompId = response.data;
      setCompId(fetchCompId);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styled.container}>
      <ViewApprovalBoxList compId={compId} />
      <DetailApprovalBox />
    </div>
  );
}
export default ApprovalBoxSetPage;
