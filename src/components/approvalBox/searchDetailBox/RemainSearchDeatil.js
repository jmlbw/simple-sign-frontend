import { AiOutlineSearch } from 'react-icons/ai';
import {
  InputComp,
  ItemBox,
  SelectComp,
  TextComp,
} from '../../formManage/searchBox/components/SearchItem';
import SearchDate from '../SearchDate';
import styled from '../../../styles/components/ApprovalBox/SearchDeatil.module.css';
import React from 'react';
import { useApprovalBox } from '../../../contexts/ApprovalBoxContext';

function RemainSearchDetail(props) {
  const { state, setState } = useApprovalBox();
  const { viewItem } = state;
  const pendlist = [
    { name: '기안일', value: 'sendDate' },
    { name: '도착일', value: 'arrivedDate' },
  ];
  const concludedlist = [
    { name: '결재일', value: 'approvDate' },
    { name: '기안일', value: 'senddDate' },
    { name: '종결일', value: 'closedDate' },
  ];
  const reflist = [
    { name: '기안일', value: 'sendDate' },
    { name: '도착일', value: 'arrivedDate' },
    { name: '종결일', value: 'closedDate' },
  ];

  function optionlist() {
    if (viewItem.includes('pend')) {
      return pendlist;
    } else if (viewItem.includes('concluded')) {
      return concludedlist;
    } else if (viewItem.includes('reference')) {
      return reflist;
    } else {
      return [];
    }
  }

  return (
    <div className={styled.SearchDetailBox}>
      <ItemBox
        children={
          <>
            <SelectComp options={optionlist()} width="54px" />
            <SearchDate></SearchDate>
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'제목'} />
            <InputComp width={'220px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'내용'} />
            <InputComp width={'220px'} />
            <AiOutlineSearch />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'기안부서'} />
            <InputComp width={'220px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'기안자'} />
            <SelectComp width={'211px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'결재자'} />
            <InputComp width={'211px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'결재상태'} />
            <SelectComp width={'220px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'문서양식'} />
            <InputComp width={'199px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'문서번호'} />
            <InputComp width={'199px'} />
          </>
        }
      ></ItemBox>
    </div>
  );
}
export default RemainSearchDetail;
