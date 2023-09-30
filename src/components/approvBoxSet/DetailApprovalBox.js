import React from 'react';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';
import Button from '../../components/common/Button';
import InnerBox from '../common/InnerBox';

function DetailApprovalBox() {
  return (
    <InnerBox
      height="100%"
      width="50%"
      font_size="14px"
      text="결재함 상세"
      titleChildren={<Button label={'저장'} btnStyle={'gray_btn'} />}
    ></InnerBox>
  );
}
export default DetailApprovalBox;
