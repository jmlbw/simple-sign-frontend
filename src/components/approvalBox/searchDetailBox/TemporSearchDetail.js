import { AiOutlineSearch } from 'react-icons/ai';
import {
  InputComp,
  ItemBox,
  SelectComp,
  TextComp,
} from '../../formManage/searchBox/components/SearchItem';
import SearchDate from '../SearchDate';
import styled from '../../../styles/components/ApprovalBox/SearchDeatil.module.css';
import React, { useEffect } from 'react';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';

function TemporSearchDetail(props) {
  const { state, setState, detailSearchState, setDetailSearchState } =
    useApprovalBox();
  const { viewItem } = state;
  const dateName = props.dateName;

  const handleDataChange = (key) => (id, value) => {
    setDetailSearchState((prevState) => ({ ...prevState, [key]: value }));
  };
  const handleSelectedData = (id, selectedData) => {
    setDetailSearchState((prevState) => ({
      ...prevState,
      searchApprovState: selectedData,
    }));
  };

  const handleDateChange = (start, end) => {
    if (end) {
      end.setHours(23, 59, 59, 999); // 시, 분, 초, 밀리초 설정
    }

    setDetailSearchState((prevState) => ({
      ...prevState,
      startDate: start,
      endDate: end,
    }));
  };

  const handleSearchIconClick = () => {
    setState((prevState) => ({ ...prevState, shouldFetchDocs: true }));
  };

  useEffect(() => {
    setDetailSearchState((prevState) => ({
      ...prevState,
      searchDate: 'sendDate',
    }));
  }, [viewItem]);

  return (
    <div className={styled.SearchDetailBox}>
      <ItemBox
        children={
          <>
            <TextComp text={dateName} />
            <SearchDate onDateChange={handleDateChange} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'제목'} />
            <InputComp
              width={'220px'}
              dataHandler={handleDataChange('searchTitle')}
            />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'내용'} />
            <InputComp
              width={'220px'}
              dataHandler={handleDataChange('searchContent')}
            />
            <button onClick={handleSearchIconClick}>
              <AiOutlineSearch />
            </button>
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'문서양식'} />
            <InputComp
              width={'200px'}
              dataHandler={handleDataChange('searchDocForm')}
            />
          </>
        }
      ></ItemBox>
    </div>
  );
}
export default TemporSearchDetail;
