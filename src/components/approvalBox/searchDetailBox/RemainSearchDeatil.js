import { AiOutlineSearch } from 'react-icons/ai';
import React, { useEffect } from 'react';
import {
  InputComp,
  ItemBox,
  SelectComp,
  TextComp,
} from '../../formManage/searchBox/components/SearchItem';
import SearchDate from '../SearchDate';
import styled from '../../../styles/components/ApprovalBox/SearchDeatil.module.css';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';

function RemainSearchDetail() {
  const { state, setState, detailSearchState, setDetailSearchState } =
    useApprovalBox();
  const { viewItem } = state;
  const docStatus = [
    { name: '전체', value: '1' },
    { name: '상신', value: '2' },
    { name: '진행', value: '3' },
    { name: '종결', value: '4' },
    { name: '반려', value: '5' },
  ];
  const OPTIONS = {
    pend: [{ name: '기안일', value: 'sendDate' }],
    concluded: [
      { name: '결재일', value: 'approvDate' },
      { name: '기안일', value: 'sendDate' },
      { name: '종결일', value: 'closedDate' },
    ],
    reference: [
      { name: '기안일', value: 'sendDate' },
      { name: '도착일', value: 'arrivedDate' },
      { name: '종결일', value: 'closedDate' },
    ],
  };

  const handleSearchIconClick = () => {
    setState((prevState) => ({ ...prevState, shouldFetchDocs: true }));
  };

  const optionlist = () => {
    for (const option in OPTIONS) {
      if (viewItem.includes(option)) {
        return OPTIONS[option];
      }
    }
    return [];
  };

  useEffect(() => {
    const initialDateOption = optionlist()[0];
    if (initialDateOption) {
      setDetailSearchState((prevState) => ({
        ...prevState,
        searchDate: initialDateOption.value,
      }));
    }
  }, [viewItem]);

  useEffect(() => {
    const initialDateOption = docStatus[0];
    if (initialDateOption) {
      setDetailSearchState((prevState) => ({
        ...prevState,
        searchApprovState: initialDateOption.value,
      }));
    }
  }, [viewItem]);
  const handleSearchDate = (id, selectedDate) => {
    setDetailSearchState((prevState) => ({
      ...prevState,
      searchDate: selectedDate,
    }));
  };
  const handleSelectedData = (id, selectedData) => {
    setDetailSearchState((prevState) => ({
      ...prevState,
      searchApprovState: selectedData,
    }));
  };

  const handleDataChange = (key) => (id, value) => {
    setDetailSearchState((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleDateChange = (start, end) => {
    setDetailSearchState((prevState) => ({
      ...prevState,
      searchStartDate: start,
      searchEndDate: end,
    }));
  };

  return (
    <div className={styled.SearchDetailBox}>
      <ItemBox>
        <SelectComp
          dataHandler={handleSearchDate}
          options={optionlist()}
          width="54px"
        />
        <SearchDate onDateChange={handleDateChange} />
      </ItemBox>

      <ItemBox>
        <TextComp text={'제목'} />
        <InputComp
          width={'220px'}
          dataHandler={handleDataChange('searchTitle')}
        />
      </ItemBox>

      <ItemBox>
        <TextComp text={'내용'} />
        <InputComp
          width={'220px'}
          dataHandler={handleDataChange('searchContent')}
        />
        <button>
          <AiOutlineSearch onClick={handleSearchIconClick} />
        </button>
      </ItemBox>

      <ItemBox>
        <TextComp text={'기안부서'} />
        <InputComp
          width={'220px'}
          dataHandler={handleDataChange('searchDept')}
        />
      </ItemBox>

      <ItemBox>
        <TextComp text={'기안자'} />
        <InputComp
          width={'211px'}
          dataHandler={handleDataChange('searchWriter')}
        />
      </ItemBox>

      <ItemBox>
        <TextComp text={'결재자'} />
        <InputComp
          width={'211px'}
          dataHandler={handleDataChange('searchApprovUser')}
        />
      </ItemBox>

      <ItemBox>
        <TextComp text={'결재상태'} />
        <SelectComp width={'220px'} dataHandler={handleSelectedData} />
      </ItemBox>

      <ItemBox>
        <TextComp text={'문서양식'} />
        <InputComp
          width={'199px'}
          dataHandler={handleDataChange('searchDocForm')}
        />
      </ItemBox>

      <ItemBox>
        <TextComp text={'문서번호'} />
        <InputComp
          width={'199px'}
          dataHandler={handleDataChange('searchDocNumber')}
        />
      </ItemBox>
    </div>
  );
}

export default RemainSearchDetail;
