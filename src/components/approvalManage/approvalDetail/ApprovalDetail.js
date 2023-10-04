import React from 'react';
import InnerBox from '../../../components/common/InnerBox';
import FormListItem from '../../../components/approvalManage/formList/FormListItem';
import Button from '../../../components/common/Button';
import DetailForm from './DetailForm';
import PopUp from '../../common/PopUp';

export default function ApprovalDetail(props) {
  const approveHandler = () => {
    fetch(`http://localhost:8080/approve/approval/${props.page}`, {
      method: 'POST',
    })
      .then((res) => {
        if (res.status === 200) {
          alert('결재가 승인되었습니다.');
        } else {
          alert('결재가 실패했습니다.');
        }
      })
      .catch((e) => {
        alert('결재가 실패했습니다.');
      });
  };

  const returnHandler = () => {
    fetch(`http://localhost:8080/approve/return/${props.page}`, {
      method: 'POST',
    })
      .then((res) => {
        if (res.status === 200) {
          alert('결재가 반려되었습니다.');
        } else {
          alert('결재반려를 실패했습니다.');
        }
      })
      .catch((e) => {
        alert('결재반려를 실패했습니다.');
      });
  };
  const returnTitleComponent = () => {
    return (
      <>
        <Button label={'승인'} btnStyle={'gray_btn'} onClick={approveHandler} />
        <Button label={'반려'} btnStyle={'gray_btn'} onClick={returnHandler} />
      </>
    );
  };

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
    </div>
  );
}
