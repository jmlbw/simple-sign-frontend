import { useState, useEffect } from 'react';
import styled from '../../../styles/components/formManage/formDetail/FormDetail.module.css';
import Title from '../../common/Title';
import { RxDividerVertical } from 'react-icons/rx';
import DetailTable from './components/DetailTable';
import Button from '../../common/Button';
import PopUp from '../../common/PopUp';

export default function FormDetail({ title }) {
  const form_nav_sample_data = [
    { id: 1, name: '기본' },
    { id: 1, name: '결재라인' },
  ];
  // 회사 양식명 공개범위 사용여부 사용 미사용 기본파일 본문파일
  const detail_sample_data = [
    { id: 'comp_name', name: '회사', type: 'input', data: '(주)더존' },
    { id: 'form_name', name: '양식명', type: 'input', data: '휴가 신청서' },
    {
      id: 'scope',
      name: '공개범위',
      type: 'area',
      data: ['우리 회사', '옆 회사'],
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
      id: 'form_used_status',
      name: '사용여부',
      type: 'radio',
      data: '사용',
      form: ['사용', '미사용'],
    },
    { id: 'default_file', name: '기본파일', type: 'file', data: '' },
    { id: 'main_file', name: '본문파일', type: 'file', data: '' },
  ];

  const [detailData, setDetailData] = useState(detail_sample_data);
  const [formNav, setFormNav] = useState(form_nav_sample_data);

  const handleDetailData = (id, value) => {
    for (let i = 0; i < detailData.length; i++) {
      if (detailData[i].id === id) {
        detailData[i].data = value;
        setDetailData([...detailData]);
        return;
      }
    }
  };

  return (
    <>
      <div className={styled.title_area}>
        <Title text={title} font_size={'18px'}></Title>
        <div className={styled.button_area}>
          <Button label={'저장'} btnStyle={'gray_btn'} />
        </div>
      </div>
      <div className={styled.form_nav_area}>
        {title === '양식상세'
          ? formNav.map((ele, index) => {
              return (
                <div key={index}>
                  <button>{ele.name}</button>
                  {index !== formNav.length - 1 ? <RxDividerVertical /> : null}
                </div>
              );
            })
          : null}
      </div>
      <div className={styled.form_detail_area}>
        <DetailTable tableList={detailData} onChangeFunc={handleDetailData} />
      </div>
    </>
  );
}
