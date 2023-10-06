import React, { useEffect, useState } from 'react';
import styled from '../../../styles/components/formManage/formDetail/FormDetail.module.css';
import DetailTable from './components/DetailTable';
import Button from '../../common/Button';
import InnerBox from '../../common/InnerBox';
import { useFormManage } from '../../../contexts/FormManageContext';
import insertForm from '../../../apis/commonAPI/insertForm';
import updateForm from '../../../apis/commonAPI/updateForm';
import FormDetailNav from './components/FormDetailNav';
import DataList from '../formList/DataList';
import { columns } from '../../../assets/datas/form_approval_line';

export default function FormDetail({ searchHandler }) {
  const { detailData, flagData, createDetailData } = useFormManage();
  const [activeButton, setActiveButton] = useState(1);

  useEffect(() => {
    console.log(detailData);
  }, [detailData]);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const dataHandler = (data) => {
    console.log(data);
  };

  const updateDetailFunc = () => {
    if (flagData === 2) {
      updateForm(detailData)
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          alert('양식이 수정되었습니다.');
        })
        .then(() => {
          searchHandler();
        })
        .catch((err) => {
          console.error(err);
          if (err.message === '404') {
            alert('검색된 데이터가 없습니다.');
          }
        });
    }
  };

  const createDetailFunc = () => {
    if (flagData === 1) {
      insertForm(detailData)
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
        <FormDetailNav
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        ></FormDetailNav>
        {activeButton === 1 ? (
          <div className={styled.form_detail_area}>
            <DetailTable />
          </div>
        ) : (
          <DataList
            rows={detailData.approvalLine}
            columns={columns}
            dataHandler={dataHandler}
          />
        )}
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
