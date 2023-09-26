import React, { useEffect, useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import DocItem from './DocItem';
import { useApprovalBox } from '../../contexts/ApprovalBoxContext';
import getDocsList from '../../apis/approvalBoxAPI/getDocsList';
import styled from '../../styles/components/ApprovalBox/ViewDocBox.module.css';

function ViewDocBox() {
  const { state, setState } = useApprovalBox();
  const { viewItem } = state;
  const [docData, setDocData] = useState([]);
  const customViewItems = ['send', 'pend'];

  // 페이징
  const [page, setPage] = useState(0); // 현재 페이지 번호
  const [rowsPerPage, setRowsPerPage] = useState(5); // 한 페이지에 보여줄 아이템 수
  const [totalCount, setTotalCount] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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

  // 결재함별 문서 api 요청
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getDocsList(
          customViewItems,
          rowsPerPage,
          page * rowsPerPage
        );

        const responseData = response.data;
        const docList = responseData.docList;
        const totalCount = responseData.count;
        setTotalCount(totalCount);

        setDocData(
          docList.map((docItem) => ({
            ...docItem,
            createdAt: new Date(docItem.createdAt),
          }))
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [viewItem, page, rowsPerPage]);

  const displayedData = docData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className={styled.container}>
      <div className={styled.tableheader}>
        <div className={styled.titleAndcontents}>
          <span className={styled.title1}>{setDatename()}</span>
          <span className={styled.title2}>제목/문서번호</span>
          <span className={styled.title3}>기안자/기안부서</span>
          <span className={styled.title4}>
            {viewItem !== 'tempor' && '결재상태'} {/* 변경된 부분: !== 사용 */}
          </span>
        </div>
      </div>
      <div className={styled.docContainer}>
        <ul className={styled.docList}>
          {displayedData.map((docItem, index) => (
            <DocItem
              key={index}
              docNumber={docItem.approvalDocId}
              formName={docItem.formName}
              date={docItem.createdAt.toLocaleString('ko-KR')}
              title={docItem.approvalDocTitle}
              sendUser={docItem.userName}
              docStatus={docItem.docStatus}
              sendDepartDetail={docItem.deptName}
            />
          ))}
        </ul>
      </div>
      <TablePagination
        component="div"
        count={totalCount}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default ViewDocBox;
