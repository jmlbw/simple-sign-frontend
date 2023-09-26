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

function TemporSearchDetail(props) {
  const dateName = props.dateName;
  return (
    <div className={styled.SearchDetailBox}>
      <ItemBox
        children={
          <>
            <TextComp text={dateName} />
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
            <TextComp text={'문서양식'} />
            <InputComp width={'200px'} />
          </>
        }
      ></ItemBox>
    </div>
  );
}
export default TemporSearchDetail;
