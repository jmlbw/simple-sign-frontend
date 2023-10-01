import React, { useState } from 'react';
import styled from '../../../styles/components/formManage/formDetail/FormDetail.module.css';
import SeqDetailTable from './components/SeqDetailTable';
import Button from '../../common/Button';
import { useSeqManage } from '../../../contexts/SeqManageContext';
import InnerBox from '../../common/InnerBox';
import insertSeq from '../../../apis/commonAPI/insertSeq';

export default function SeqDetail() {
  const { detailData, flagData, createDetailData } = useSeqManage();

  const updateDetailFunc = () => {
    // if (flagData === 2) {
    //   updateForm(detailData)
    //     .then((res) => {
    //       if (!res.ok) {
    //         throw new Error(res.status);
    //       }
    //       alert('양식이 수정되었습니다.');
    //     })
    //     .then(() => {
    //       searchHandler();
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //       if (err.message === '404') {
    //         alert('검색된 데이터가 없습니다.');
    //       }
    //     });
    // }
  };

  const createDetailFunc = () => {
    if (flagData === 1) {
      insertSeq(detailData)
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          alert('새 양식이 생성되었습니다.');
        })
        .catch((err) => {
          console.error(err);
          if (err.message === '404') {
            alert('검색된 데이터가 없습니다.');
          }
        });
    }
  };

  const returnTitleComponent = () => {
    return (
      <>
        <Button
          label={'추가'}
          btnStyle={'gray_btn'}
          onClick={createDetailData}
        />
        <Button
          label={flagData === 1 ? '저장' : '수정'}
          btnStyle={'gray_btn'}
          onClick={flagData === 1 ? createDetailFunc : updateDetailFunc}
        />
      </>
    );
  };

  const returnMainComponent = () => {
    return (
      <>
        <div className={styled.form_detail_area}>
          <SeqDetailTable />
        </div>
      </>
    );
  };

  return (
    <>
      <InnerBox
        text={'문서채번상세'}
        width={'100%'}
        height={'100%'}
        titleChildren={returnTitleComponent()}
        children={returnMainComponent()}
      ></InnerBox>
    </>
  );
}
