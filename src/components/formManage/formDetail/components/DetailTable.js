import React, { useState } from 'react';
import styled from '../../../../styles/components/formManage/formDetail/components/DetailTable.module.css';
import {
  DetailBox,
  TitleBox,
  InputBox,
  FileBox,
  AreaBox,
  RadioBox,
} from './DetailTableItem';
import { useFormManage } from '../../../../contexts/FormManageContext';
import { useEffect } from 'react';

export default function DetailTable({ tableList, onChangeFunc }) {
  const { detailData, setDetailData } = useFormManage();

  const compNameHandler = (data) => {
    setDetailData({ ...detailData, compName: data });
  };
  const formNameHandler = (data) => {
    setDetailData({ ...detailData, formName: data });
  };

  const scopeHandler = (data) => {
    setDetailData({ ...detailData, scope: data });
  };

  const statusHandler = (data) => {
    console.log('status:', data);
    setDetailData({ ...detailData, status: data });
  };

  const defaultfileHandler = (data) => {
    setDetailData({ ...detailData, defaultForm: data });
  };
  const mainfileHandler = (data) => {
    setDetailData({ ...detailData, mainForm: data });
  };

  useEffect(() => {
    console.log(detailData);
  }, [detailData]);

  const buttons = [
    {
      name: '사용',
      value: true,
    },
    { name: '미사용', value: false },
  ];

  return (
    <>
      <DetailBox
        children={
          <>
            <TitleBox title={'회사명'} />
            <InputBox
              data={detailData.compName}
              dataHandler={compNameHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'양식명'} />
            <InputBox
              data={detailData.formName}
              dataHandler={formNameHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'공개범위'} />
            <AreaBox data={detailData.scope} dataHandler={scopeHandler} />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'사용여부'} />
            <RadioBox
              buttons={buttons}
              data={detailData.status}
              dataHandler={statusHandler}
            ></RadioBox>
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'기본파일'} />
            <FileBox
              name={'기본파일'}
              data={detailData.defaultForm}
              dataHandler={defaultfileHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'본문파일'} />
            <FileBox
              name={'본문파일'}
              data={detailData.mainForm}
              dataHandler={mainfileHandler}
            />
          </>
        }
      ></DetailBox>
    </>
  );
}
