import React, { useState } from 'react';
import Button from '../../components/common/Button';
import InnerBox from '../common/InnerBox';
import DetailBox from './DetailBox';

function DetailApprovalBox() {
  return (
    <InnerBox
      height="100%"
      width="50%"
      font_size="14px"
      text="결재함 상세"
      titleChildren={<Button label={'저장'} btnStyle={'gray_btn'} />}
    >
      <DetailBox />
    </InnerBox>
  );
}

export default DetailApprovalBox;
