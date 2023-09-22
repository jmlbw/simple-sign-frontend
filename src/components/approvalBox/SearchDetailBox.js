import styled from '../../styles/pages/ApprovalBoxViewPage.module.css';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import {
  InputComp,
  ItemBox,
  SelectComp,
  TextComp,
} from '../formManage/searchBox/components/SearchItem';
import SearchDate from './SearchDate';
function SearchDetailBox() {
  return (
    <div className={styled.searchDetail}>
      <ItemBox
        children={
          <>
            <TextComp text={'기안일'} />
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
            <TextComp text={'결재자'} />
            <InputComp width={'220px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'결재상태'} />
            <SelectComp width={'200px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'문서양식'} />
            <InputComp width={'200px'} />
          </>
        }
      ></ItemBox>
      <ItemBox
        children={
          <>
            <TextComp text={'문서번호'} />
            <InputComp width={'210px'} />
          </>
        }
      ></ItemBox>
    </div>
  );
}
export default SearchDetailBox;
