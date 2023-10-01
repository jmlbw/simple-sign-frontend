import React from 'react';
import {
  InputComp,
  ItemBox,
  SelectComp,
} from '../formManage/searchBox/components/SearchItem';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';

function ApprovalBoxSearch() {
  const list = [{ name: '전체', value: 'all' }];
  return (
    <div className={styled.searchbox}>
      <ItemBox
        children={
          <>
            <SelectComp options={list} width="100%" />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <InputComp width={'100%'} placeholder="결재함명을 입력하세요." />
            <AiOutlineSearch />
          </>
        }
      ></ItemBox>
    </div>
  );
}
export default ApprovalBoxSearch;
