import React from 'react';
import InnerBox from '../../../components/common/InnerBox';
import FormListItem from '../../../components/approvalManage/formList/FormListItem';
import Button from '../../../components/common/Button';
import DetailForm from './DetailForm';

export default function ApprovalDetail(props) {
  const returnTitleComponent = () => {
    return (
      <>
        <Button label={'승인'} btnStyle={'gray_btn'} />
        <Button label={'반려'} btnStyle={'gray_btn'} />
      </>
    );
  };

  return (
    <div>
      <div>
        <InnerBox
          text={'양식상세'}
          width={'100%'}
          height={'100%'}
          titleChildren={returnTitleComponent()}
          children={<DetailForm approval_doc_id={props.page} />}
        ></InnerBox>
      </div>
    </div>
  );
}
