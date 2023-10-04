import React, { useState, useEffect } from 'react';
import {
  DetailBox,
  TitleBox,
  InputBox,
  AreaBox,
  SelectBox,
} from '../../../formManage/formDetail/components/DetailTableItem';
import { useSeqManage } from '../../../../contexts/SeqManageContext';
import PopUp from '../../../common/PopUp';
import styled from '../../../../styles/components/seqManage/seqDetail/SeqDetailTable.module.css';
import { FiEdit } from 'react-icons/fi';
import PopUpFoot from '../../../common/PopUpFoot';
import SeqSet from '../../seqSetPopUp/SeqSet';
import getSeqItemList from '../../../../apis/commonAPI/getSeqItemList';

export default function SeqDetailTable() {
  const {
    detailData,
    flagData,
    setData,
    setDetailData,
    seqItems,
    setSeqItems,
  } = useSeqManage();
  const [seqList, setseqList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getSeqItemList()
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setSeqItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const itemIdList = detailData.seqString.split(',');
    if (detailData.seqString !== '') {
      let result = seqItems.filter((ele) => {
        if (itemIdList.includes(ele.id)) {
          return true;
        }
        return false;
      });
      setseqList([...result]);
    }
  }, [detailData.seqString]);

  const seqConfirm = () => {
    setDetailData({
      ...detailData,
      seqList: seqList
        .map((ele) => {
          return ele.value;
        })
        .join(' '),
      seqString: seqList
        .map((ele) => {
          return ele.id;
        })
        .join(','),
    });
  };

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
      onClick: () => {
        seqConfirm();
        closeModal();
      },
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
                    isModalOpen={isModalOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                    children={
                      <>
                        <div className={styled.contentContainer}>
                          <SeqSet
                            seqItems={seqItems}
                            seqList={seqList}
                            setseqList={setseqList}
                            initData={detailData.seqString}
                          />
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
