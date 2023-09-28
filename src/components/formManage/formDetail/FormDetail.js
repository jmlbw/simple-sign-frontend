import React, { useState } from 'react';
import styled from '../../../styles/components/formManage/formDetail/FormDetail.module.css';
import DetailTable from './components/DetailTable';
import Button from '../../common/Button';
import InnerBox from '../../common/InnerBox';
import { useFormManage } from '../../../contexts/FormManageContext';
import insertForm from '../../../apis/commonAPI/insertForm';
import updateForm from '../../../apis/commonAPI/updateForm';
import FormDetailNav from './components/FormDetailNav';

export default function FormDetail() {
  const { detailData, flagData, createDetailData } = useFormManage();
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const updateDetailFunc = () => {
    if (flagData === 2) {
      updateForm(detailData)
        .then((res) => {
          console.log(res);
          console.log(res.code);
          return res.json();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const createDetailFunc = () => {
    if (flagData === 1) {
      insertForm(detailData)
        .then((res) => {
          console.log(res);
          console.log(res.code);
          return res.json();
        })
        .catch((err) => {
          console.error(err);
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
        <FormDetailNav
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        ></FormDetailNav>
        <div className={styled.form_detail_area}>
          <DetailTable />
        </div>
      </>
    );
  };

  return (
    <InnerBox
      text={'양식상세'}
      width={'100%'}
      height={'100%'}
      titleChildren={returnTitleComponent()}
      children={returnMainComponent()}
    ></InnerBox>
  );
}
