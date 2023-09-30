import React from 'react';
import styled from '../../styles/components/ApprovalBox/ApprovalBoxList.module.css';
import { BiSolidFolder } from 'react-icons/bi';
function ApprovalBoxList() {
  return (
    <div className={styled.itemBox}>
      <div className={styled.iconimg}>
        <BiSolidFolder />
      </div>
      <div className={styled.boxName}>미결+기결함</div>
    </div>
  );
}
export default ApprovalBoxList;
