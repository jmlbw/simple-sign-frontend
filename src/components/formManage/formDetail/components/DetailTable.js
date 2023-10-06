import React from 'react';
import {
  DetailBox,
  TitleBox,
  InputBox,
  FileBox,
  AreaBox,
  RadioBox,
  SelectBox,
} from './DetailTableItem';
import { useFormManage } from '../../../../contexts/FormManageContext';

export default function DetailTable() {
  const { detailData, flagData, setDetailData, setData } = useFormManage();

  const dataUpdateHandler = (id, data) => {
    setDetailData({ ...detailData, [id]: data });
  };

  const scopefilterHandler = (id, category, useId) => {
    let filetedData = detailData.scope.filter((ele) => {
      if (ele.category === category && ele.useId === useId) {
        return false;
      }
      return true;
    });
    setDetailData({ ...detailData, [id]: filetedData });
  };

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
            {flagData === 1 ? (
              <SelectBox
                id={'compName'}
                data={setData.compList}
                dataHandler={dataUpdateHandler}
              />
            ) : (
              <InputBox
                id={'compName'}
                data={detailData.compName}
                dataHandler={dataUpdateHandler}
                disabled={true}
              />
            )}
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
              dataHandler={scopefilterHandler}
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
