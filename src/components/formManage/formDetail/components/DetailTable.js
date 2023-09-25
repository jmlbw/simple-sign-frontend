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

  const dataUpdateHandler = (id, data) => {
    setDetailData({ ...detailData, [id]: data });
  };

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
              id={'compName'}
              data={detailData.compName}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'양식명'} />
            <InputBox
              id={'formName'}
              data={detailData.formName}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'공개범위'} />
            <AreaBox
              id={'scope'}
              data={detailData.scope}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'사용여부'} />
            <RadioBox
              id={'status'}
              buttons={buttons}
              data={detailData.status}
              dataHandler={dataUpdateHandler}
            ></RadioBox>
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'기본파일'} />
            <FileBox
              id={'defaultForm'}
              name={'기본파일'}
              data={detailData.defaultForm}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'본문파일'} />
            <FileBox
              id={'mainForm'}
              name={'본문파일'}
              data={detailData.mainForm}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
    </>
  );
}
