import React, { useState } from 'react';
import InnerBox from '../../../components/common/InnerBox';
import Button from '../../../components/common/Button';
import DetailForm from './DetailForm';
import { useLocation, useNavigate } from 'react-router-dom';
import PopUp from '../../common/PopUp';
import PopUpFoot from '../../common/PopUpFoot';
import insertApproval from '../../../apis/approvalManageAPI/insertApproval';
import insertReturn from '../../../apis/approvalManageAPI/insertReturn';
import deleteApprovalDoc from '../../../apis/approvalManageAPI/deleteApprovalDoc';
import { useLoading } from '../../../contexts/LoadingContext';
import ReplyForm from './ReplyForm';

export default function ApprovalDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState('');
  const { showLoading, hideLoading } = useLoading();

  const openModal = (mode) => {
    setIsModalOpen(true);
    if (mode === 'approve') {
      setMode('승인');
    } else if (mode === 'return') {
      setMode('반려');
    }
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const approveHandler = () => {
    showLoading();
    //결재승인
    insertApproval(location.search.split('=')[1])
      .then((res) => {
        if (res.status === 200) {
          alert('결재가 승인되었습니다.');
        } else {
          alert('결재가 실패했습니다.');
          hideLoading();
        }
      })
      .catch((e) => {
        alert('결재가 실패했습니다.');
        hideLoading();
      })
      .finally(() => {
        hideLoading();
      });
  };

  const returnHandler = () => {
    showLoading();
    //결재반려
    insertReturn(location.search.split('=')[1])
      .then((res) => {
        if (res.status === 200) {
          alert('결재가 반려되었습니다.');
        } else {
          alert('결재반려를 실패했습니다.');
        }
      })
      .catch((e) => {
        alert('결재반려를 실패했습니다.');
      })
      .finally(() => {
        hideLoading();
      });
  };

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
    navigate(`/ADD?page=${location.search.split('=')[1]}`);
  };

  const deleteHandler = () => {
    deleteApprovalDoc(location.search.split('=')[1])
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
          children={
            <>
              <DetailForm approval_doc_id={location.search.split('=')[1]} />
              <Button
                label={'문서수정'}
                btnStyle={'blue_btn'}
                onClick={updateHandler}
              />
              <Button
                label={'문서삭제'}
                btnStyle={'gray_btn'}
                onClick={deleteHandler}
              />
              <ReplyForm approval_doc_id={location.search.split('=')[1]} />
            </>
          }
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
