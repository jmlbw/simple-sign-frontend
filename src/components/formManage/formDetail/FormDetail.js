import React, { useState } from 'react';
import styled from '../../../styles/components/formManage/formDetail/FormDetail.module.css';
import { RxDividerVertical } from 'react-icons/rx';
import DetailTable from './components/DetailTable';
import Button from '../../common/Button';
import InnerBox from '../../common/InnerBox';
import { useFormManage } from '../../../contexts/FormManageContext';
import insertForm from '../../../apis/commonAPI/insertForm';

export default function FormDetail() {
  const { detailData, setDetailData, flagData, createDetailData } =
    useFormManage();

  const updateDetailFunc = () => {
    console.log('수정');
  };

  const createDetailFunc = () => {
    console.log('저장');
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
  // const form_nav_sample_data = [
  //   { id: 1, name: '기본' },
  //   { id: 1, name: '결재라인' },
  // ];
  // 회사 양식명 공개범위 사용여부 사용 미사용 기본파일 본문파일

  // const [formNav, setFormNav] = useState(form_nav_sample_data);

  // const handleDetailData = (id, value) => {
  //   for (let i = 0; i < detailData.length; i++) {
  //     if (detailData[i].id === id) {
  //       detailData[i].data = value;
  //       setDetailData([...detailData]);
  //       return;
  //     }
  //   }
  // };

  return (
    <InnerBox
      text={'양식상세'}
      width={'100%'}
      height={'100%'}
      titleChildren={
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
      }
      children={
        <>
          {/* <div className={styled.title_area}>
            <div className={styled.button_area}>
              <Button label={'저장'} btnStyle={'gray_btn'} />
            </div>
          </div> */}
          {/* <div className={styled.form_nav_area}>
            {title === '양식상세'
              ? formNav.map((ele, index) => {
                  return (
                    <div key={index}>
                      <button>{ele.name}</button>
                      {index !== formNav.length - 1 ? (
                        <RxDividerVertical />
                      ) : null}
                    </div>
                  );
                })
              : null}
          </div> */}
          <div className={styled.form_detail_area}>
            <DetailTable />
          </div>
        </>
      }
    ></InnerBox>
  );
}
