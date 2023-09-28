import React, { useEffect, useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import DocItem from './DocItem';
import { useApprovalBox } from '../../contexts/ApprovalBoxContext';
import getDocsList from '../../apis/approvalBoxAPI/getDocsList';
import styled from '../../styles/components/ApprovalBox/ViewDocBox.module.css';
import SearchContext from '../../contexts/SearchContext';

function ViewDocBox() {
  const { view } = useContext(SearchContext);
  const { state, setState } = useApprovalBox();
  let { viewItem } = state;
  const [docData, setDocData] = useState([]);

  // 페이징
  const [page, setPage] = useState(1); // 현재 페이지 번호 (1부터 시작)
  const [rowsPerPage, setRowsPerPage] = useState(10); // 한 페이지에 보여줄 아이템 수
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // 최대 높이를 동적으로 결정하기 위한 스타일 객체
  const docListStyles = {
    maxHeight: view === false ? '400px' : '250px',
  };

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);

    try {
      const response = await getDocsList(
        viewItem,
        rowsPerPage,
        (newPage - 1) * rowsPerPage // 페이지 번호를 1부터 시작하도록 조정
      );

      const responseData = response.data;
      const docList = responseData.docList;
      setDocData(
        docList.map((docItem) => ({
          ...docItem,
          createdAt: new Date(docItem.createdAt),
        }))
      );
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // 페이지 번호를 1로 리셋
  };

  function setDatename() {
    if (viewItem.includes('send') || viewItem.includes('reference')) {
      return '기안일';
    } else if (viewItem.includes('tempor')) {
      return '작성일';
    } else if (viewItem.includes('pend')) {
      return '도착일';
    } else if (viewItem.includes('concluded')) {
      return '결재일';
    }
  }

  // viewItem이 바뀔 때마다 API 요청을 하고 데이터를 업데이트합니다.
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getDocsList(viewItem, rowsPerPage, 0);

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

        // 전체 페이지 수 계산
        setTotalPages(Math.ceil(totalCount / rowsPerPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [viewItem, rowsPerPage]); // viewItem이 변경될 때마다 재요청

  const displayedData = docData.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage
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
        <ul className={styled.docList} style={docListStyles}>
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
      <div className={styled.pagination}>
        <Pagination
          count={totalPages} // 전체 페이지 수를 계산
          page={page} // 현재 페이지 번호
          onChange={handleChangePage} // 페이지 변경 핸들러
          renderItem={(item) => (
            <PaginationItem
              component="button"
              onClick={() => handleChangePage(null, item.page)}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
}

export default ViewDocBox;
