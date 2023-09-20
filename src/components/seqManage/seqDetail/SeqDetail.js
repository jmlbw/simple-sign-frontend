import React, { useState } from 'react';
import styled from '../../../styles/components/formManage/formDetail/FormDetail.module.css';
import Title from '../../common/Title';
import { RxDividerVertical } from 'react-icons/rx';
import SeqDetailTable from './components/SeqDetailTable';
import DetailTable from '../../formManage/formDetail/components/DetailTable';
import Button from '../../common/Button';
import PopUp from '../../common/PopUp';
import FormSelect from '../../formManage/formSelectPopUp/FormSelect';
import SeqSet from '../seqSetPopUp/SeqSet';

export default function SeqDetail({ title }) {
  const detail_sample_data1 = [
    { id: 'comp_name', name: '회사', type: 'input', data: '(주)더존' },
    { id: 'seq_code', name: '코드', type: 'input', data: '1' },
    { id: 'seq_name', name: '채번명', type: 'input', data: '휴가 신청 채번' },
    {
      id: 'scope_depaertment',
      name: '대상부서',
      type: 'area',
      data: ['총무부', '개발부'],
      children: (
        <PopUp
          label={<RxDividerVertical />}
          title={'회사사업장부서선택'}
          width={'1200px'}
          height={'700px'}
        />
      ),
    },
    {
      id: 'scope_form',
      name: '대상양식',
      type: 'area',
      data: ['휴가 신청서', '지각 사유서'],
      children: (
        <PopUp
          label={<RxDividerVertical />}
          title={'양식선택'}
          width={'500px'}
          height={'700px'}
          children={<FormSelect />}
        />
      ),
    },
    { id: 'description', name: '설명', type: 'input', data: '그냥 채번' },
    { id: 'seq_sort_order', name: '정렬순서', type: 'input', data: '127' },
  ];

  const detail_sample_data2 = [
    {
      id: 'seq_form',
      name: '채번값설정',
      type: 'input',
      data: '회사명칭-부서명칭-년도',
      children: (
        <PopUp
          label={<RxDividerVertical />}
          title={'채번설정'}
          width={'1000px'}
          height={'700px'}
          children={<SeqSet />}
        />
      ),
    },
  ];

  const [detailData1, setDetailData1] = useState(detail_sample_data1);
  const [detailData2, setDetailData2] = useState(detail_sample_data2);

  const handleDetailData1 = (id, value) => {
    for (let i = 0; i < detailData1.length; i++) {
      if (detailData1[i].id === id) {
        detailData1[i].data = value;
        setDetailData1([...detailData1]);
        return;
      }
    }
  };

  const handleDetailData2 = (id, value) => {
    for (let i = 0; i < detailData2.length; i++) {
      if (detailData2[i].id === id) {
        detailData2[i].data = value;
        setDetailData2([...detailData2]);
        return;
      }
    }
  };

  return (
    <>
      <div className={styled.title_area}>
        <Title text={'문서채번상세'} font_size={'18px'}></Title>
        <div className={styled.button_area}>
          <Button label={'저장'} btnStyle={'gray_btn'} />
        </div>
      </div>

      <div className={styled.form_detail_area}>
        <DetailTable tableList={detailData1} onChangeFunc={handleDetailData1} />
      </div>

      <div className={styled.title_area}>
        <Title text={'채번설정'} font_size={'18px'}></Title>
      </div>
      <div className={styled.form_detail_area}>
        {/* <SeqDetailTable /> */}
        <DetailTable tableList={detailData2} onChangeFunc={handleDetailData2} />
      </div>
    </>
  );
}
