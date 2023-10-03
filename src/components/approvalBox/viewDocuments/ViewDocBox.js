import React, { useEffect, useState, useContext } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import DocItem from './DocItem';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';
import getDocsList, {
  detailSearchDocs,
} from '../../../apis/approvalBoxAPI/getDocsList';
import styled from '../../../styles/components/ApprovalBox/ViewDocBox.module.css';
import SearchContext from '../../../contexts/SearchContext';
import TableHeader from './TableHeader';

function ViewDocBox() {
  const { view } = useContext(SearchContext);
  const { state, setState, detailSearchState } = useApprovalBox();
  let { viewItem } = state;
  const [docData, setDocData] = useState([]);

  // 페이징
  const [page, setPage] = useState(1); // 현재 페이지 번호 (1부터 시작)
  const [rowsPerPage, setRowsPerPage] = useState(10); // 한 페이지에 보여줄 아이템 수
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const docListStyles = {
    maxHeight: view === false ? '400px' : '250px',
  };

  const handleChangePage = async (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const offset = (page - 1) * rowsPerPage; // 페이지에 따른 올바른 offset 계산
        const response = await getDocsList(
          viewItem,
          rowsPerPage,
          offset, // 업데이트된 offset 값 사용
          state.searchInput,
          state.detailSearchState
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

        // 전체 페이지 수 계산
        setTotalPages(Math.ceil(totalCount / rowsPerPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [viewItem, state.searchInput, page]);

  useEffect(() => {
    if (state.shouldFetchDocs) {
      // shouldFetchDocs 값이 true일 때만 API 요청을 수행
      async function fetchData() {
        try {
          const offset = (page - 1) * rowsPerPage; // 페이지에 따른 올바른 offset 계산
          const response = await detailSearchDocs(
            viewItem,
            rowsPerPage,
            offset,
            detailSearchState
          );
          const responseData = response.data;
          const docList = responseData.docList;
          const totalCount = responseData.count;
          setTotalCount(totalCount);

          setDocData(
            docList
              ? docList.map((docItem) => ({
                  ...docItem,
                  createdAt: new Date(docItem.createdAt),
                }))
              : []
          );

          // 전체 페이지 수 계산
          setTotalPages(Math.ceil(totalCount / rowsPerPage));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();

      // 요청 후 shouldFetchDocs 값을 다시 false로 설정하여 추가 요청을 방지합니다.
      setState((prevState) => ({ ...prevState, shouldFetchDocs: false }));
    }
  }, [state.shouldFetchDocs]); // 종속성 배열에만 state.shouldFetchDocs 포함

  useEffect(() => {
    setPage(1);
  }, [viewItem, state.searchInput]);

  return (
    <div className={styled.container}>
      <TableHeader />
      <div className={styled.docContainer}>
        <ul className={styled.docList} style={docListStyles}>
          {docData.map((docItem) => (
            <DocItem
              key={docItem.approvalDocId}
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
          count={totalPages}
          page={page}
          onChange={handleChangePage}
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
