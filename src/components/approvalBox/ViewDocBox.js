import getSendDocs, {
  getTemporDocs,
} from '../../apis/approvalBoxAPI/getSendDocs';
import styled from '../../styles/components/ApprovalBox/ViewDocBox.module.css';
import DocItem from './DocItem';
import React, { useEffect, useState } from 'react';

function ViewDocBox() {
  const [docData, setDocData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSendDocs();
        setDocData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styled.container}>
      <div className={styled.tableheader}>
        <div className={styled.titleAndcontents}>
          <span className={styled.title1}>기안일</span>
          <span className={styled.title2}>제목/문서번호</span>
          <span className={styled.title3}>기안자/기안부서</span>
          <span className={styled.title4}>결재상태</span>
        </div>
      </div>
      <div className={styled.docContainer}>
        <ul className={styled.docList}>
          {docData.map((docItem, index) => (
            <DocItem
              key={index} // 각 아이템은 고유한 키를 가져야 합니다.
              docNumber={docItem.approvalDocId}
              formName={docItem.formName}
              date={docItem.createdAt}
              title={docItem.approvalDocTitle}
              sendUser={docItem.userName}
              docStatus={docItem.docStatus}
              sendDepartDetail={docItem.deptName}
            ></DocItem>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ViewDocBox;
