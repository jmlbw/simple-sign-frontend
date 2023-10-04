import React from 'react';
import {
  DetailBox,
  TitleBox,
  InputBox,
  AreaBox,
} from '../../../formManage/formDetail/components/DetailTableItem';
import { useSeqManage } from '../../../../contexts/SeqManageContext';
import PopUp from '../../../common/PopUp';
import styled from '../../../../styles/components/seqManage/seqDetail/SeqDetailTable.module.css';
import { FiEdit } from 'react-icons/fi';
import PopUpFoot from '../../../common/PopUpFoot';
import SeqSet from '../../seqSetPopUp/SeqSet';
import { SelectComp } from '../../../formManage/searchBox/components/SearchItem';

export default function SeqDetailTable() {
  const { detailData, flagData, setData, setDetailData } = useSeqManage();

  const dataUpdateHandler = (id, data) => {
    setDetailData({ ...detailData, [id]: data });
  };

  const deptScopefilterHandler = (id, category, useId) => {
    let filetedData = detailData.deptScope.filter((ele) => {
      if (ele.category === category && ele.useId === useId) {
        return false;
      }
      return true;
    });
    setDetailData({ ...detailData, [id]: filetedData });
  };

  const formScopefilterHandler = (id, category, useId) => {
    let filetedData = detailData.formScope.filter((ele) => {
      if (ele.category === category && ele.useId === useId) {
        return false;
      }
      return true;
    });
    setDetailData({ ...detailData, [id]: filetedData });
  };

  const grayAndBlueBtn = [
    {
      label: '반영',
      onClick: () => {},
      btnStyle: 'popup_blue_btn',
    },
  ];

  return (
    <>
      <DetailBox
        children={
          <>
            <TitleBox title={'회사명'} />
            {flagData === 1 ? (
              <SelectComp
                width={'170px'}
                options={setData.compList}
                id={'compName'}
                dataHandler={dataUpdateHandler}
              />
            ) : (
              <InputBox
                id={'compName'}
                data={detailData.compName}
                dataHandler={dataUpdateHandler}
              />
            )}
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'코드'} />
            <InputBox
              id={'code'}
              data={detailData.code}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'채번명'} />
            <InputBox
              id={'seqName'}
              data={detailData.seqName}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'대상부서'} />
            <AreaBox
              id={'deptScope'}
              data={detailData.deptScope}
              dataHandler={deptScopefilterHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'대상양식'} />
            <AreaBox
              id={'formScope'}
              data={detailData.formScope}
              dataHandler={formScopefilterHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'설명'} />
            <InputBox
              id={'description'}
              data={detailData.description}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'정렬순서'} />
            <InputBox
              id={'sortOrder'}
              data={detailData.sortOrder}
              dataHandler={dataUpdateHandler}
            />
          </>
        }
      ></DetailBox>
      <DetailBox
        children={
          <>
            <TitleBox title={'채번값 설정'} />
            <InputBox
              id={'seqList'}
              data={detailData.seqList}
              dataHandler={dataUpdateHandler}
              width="80%"
              children={
                <div className={styled.popupBox}>
                  <PopUp
                    label={<FiEdit />}
                    width={'900px'}
                    height={'600px'}
                    title={'채번값 설정'}
                    children={
                      <>
                        <div className={styled.contentContainer}>
                          <SeqSet />
                        </div>
                        <PopUpFoot buttons={grayAndBlueBtn} />
                      </>
                    }
                  />
                </div>
              }
            />
          </>
        }
      ></DetailBox>
    </>
  );
}
