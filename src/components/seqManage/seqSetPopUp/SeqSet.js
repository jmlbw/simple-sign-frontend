import React, { useState } from 'react';
import Title from '../../common/Title';
import styled from '../../../styles/components/seqManage/seqSetPopUp/SeqSet.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function SeqSet() {
  const [previewData, setPreviewData] = useState('');

  return (
    <div className={styled.seqSetPopUpContainer}>
      <Title text={'채번항목'} font_size={'18px'}></Title>
      <div className={styled.seqListArea}>
        <div>
          {/* <FormList columns={columns} fields={fields} rows={rows} /> */}
        </div>
        <div>
          <BsChevronLeft className={styled.arrowBox} />
          <BsChevronRight className={styled.arrowBox} />
        </div>
        <div>
          {/* <FormList columns={columns} fields={fields} rows={rows} /> */}
        </div>
      </div>
      <Title text={'미리보기'} font_size={'18px'}></Title>
      <div className={styled.preViewArea}>{previewData}</div>
    </div>
  );
}
