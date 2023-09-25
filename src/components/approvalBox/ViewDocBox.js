import getDocsList from '../../apis/approvalBoxAPI/getDocsList';
import { useApprovalBox } from '../../contexts/ApprovalBoxContext';
import styled from '../../styles/components/ApprovalBox/ViewDocBox.module.css';
import DocItem from './DocItem';
import React, { useEffect, useState } from 'react';

function ViewDocBox() {
  const { state, setState } = useApprovalBox();
  const { viewItem } = state;
  const [docData, setDocData] = useState([]);
  const customViewItems = ['send'];
  //페이징
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const itemsPerPage = 5;

  function setDatename() {
    if (viewItem === 'send' || viewItem === 'reference') {
      return '기안일';
    } else if (viewItem === 'tempor') {
      return '작성일';
    } else if (viewItem === 'pend') {
      return '도착일';
    } else if (viewItem === 'concluded') {
      return '결재일';
    }
  }

  //결재함별 문서 api 요청
  useEffect(() => {
    async function fetchData() {
      try {
        let response;

        response = await getDocsList(
          customViewItems,
          itemsPerPage,
          (currentPage - 1) * itemsPerPage
        );

        setDocData(
          response.data.map((docItem) => ({
            // 에포크 시간을 Date 객체로 변환하여 저장
            ...docItem,
            createdAt: new Date(docItem.createdAt),
          }))
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [viewItem]); // viewItem이 변경될 때마다 useEffect 실행

  return (
    <div className={styled.container}>
      <div className={styled.tableheader}>
        <div className={styled.titleAndcontents}>
          <span className={styled.title1}>{setDatename()}</span>
          <span className={styled.title2}>제목/문서번호</span>
          <span className={styled.title3}>기안자/기안부서</span>
          <span className={styled.title4}>
            {viewItem != 'tempor' && '결재상태'}
          </span>
        </div>
      </div>
      <div className={styled.docContainer}>
        <ul className={styled.docList}>
          {docData.map((docItem, index) => (
            <DocItem
              key={index} // 각 아이템은 고유한 키를 가져야 합니다.
              docNumber={docItem.approvalDocId}
              formName={docItem.formName}
              date={docItem.createdAt.toLocaleString('ko-KR')}
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
