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

function SendSearchDetail(props) {
  const { state, setState, detailSearchState, setDetailSearchState } =
    useApprovalBox();
  const { viewItem } = state;
  const dateName = props.dateName;

  const docStatus = [
    { name: '전체', value: '1' },
    { name: '상신', value: '2' },
    { name: '진행', value: '3' },
    { name: '종결', value: '4' },
    { name: '반려', value: '5' },
  ];

  const handleSearchIconClick = () => {
    setState((prevState) => ({ ...prevState, shouldFetchDocs: true }));
  };

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

  useEffect(() => {
    const initialDateOption = docStatus[0];
    if (initialDateOption) {
      setDetailSearchState((prevState) => ({
        ...prevState,
        searchApprovState: initialDateOption.value,
      }));
      setDetailSearchState((prevState) => ({
        ...prevState,
        searchDate: 'sendDate',
      }));
    }
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
            <TextComp text={'결재자'} />
            <InputComp
              width={'220px'}
              dataHandler={handleDataChange('searchApprovUser')}
            />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'결재상태'} />
            <SelectComp
              options={docStatus}
              width={'200px'}
              dataHandler={handleSelectedData}
            />
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
      <ItemBox
        children={
          <>
            <TextComp text={'문서번호'} />
            <InputComp
              width={'210px'}
              dataHandler={handleDataChange('searchDocNumber')}
            />
          </>
        }
      ></ItemBox>
    </div>
  );
}
export default SendSearchDetail;
