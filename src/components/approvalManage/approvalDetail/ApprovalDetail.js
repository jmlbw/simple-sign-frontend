import React, { useState } from 'react';
import InnerBox from '../../../components/common/InnerBox';
import Button from '../../../components/common/Button';
import DetailForm from './DetailForm';
import PopUp from '../../common/PopUp';
import PopUpFoot from '../../common/PopUpFoot';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ApprovalDetail(props) {
  const returnTitleComponent = () => {
    return (
      <>
        <Button
          label={'승인'}
          btnStyle={'gray_btn'}
          onClick={() => openModal('approve')}
        />
        <Button
          label={'반려'}
          btnStyle={'gray_btn'}
          onClick={() => openModal('return')}
        />
      </>
    );
  };

  const updateHandler = () => {
    navigate('/AD');
  };

  const deleteHandler = () => {
    fetch(`http://localhost:8080/approve/${props.page}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 200) {
          alert('문서가 삭제되었습니다.');
        } else {
          alert('삭제를 실패했습니다.');
        }
      })
      .catch((e) => {
        alert('삭제를 실패했습니다.');
      });
  };

  const BlueAndGrayBtn = [
    {
      label: '반영',
      onClick: () => {
        if (mode === '승인') {
          approveHandler();
        } else if (mode === '반려') {
          returnHandler();
        }
        closeModal();
      },
      btnStyle: 'popup_blue_btn',
    },
    {
      label: '취소',
      onClick: () => {
        closeModal();
      },
      btnStyle: 'popup_gray_btn',
    },
  ];

  return (
    <div>
      <div>
        <InnerBox
          text={'결재문서상세페이지'}
          width={'100%'}
          height={'100%'}
          titleChildren={returnTitleComponent()}
          children={<DetailForm approval_doc_id={props.page} />}
        ></InnerBox>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <PopUp
          btnStyle={'popup_non_btn'}
          width="600px"
          height="600px"
          title={mode}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          children={
            <>
              <div>
                <div>{mode}하시겠습니까?</div>
              </div>
              <PopUpFoot buttons={BlueAndGrayBtn} />
            </>
          }
        ></PopUp>
      )}
    </div>
  );
}
