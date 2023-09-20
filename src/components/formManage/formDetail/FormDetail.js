import React, { useState } from 'react';
import styled from '../../../styles/components/formManage/formDetail/FormDetail.module.css';
import Title from '../../common/Title';
import { RxDividerVertical } from 'react-icons/rx';
import DetailTable from './components/DetailTable';

export default function FormDetail() {
  const form_nav_sample_data = [
    { id: 1, name: '기본' },
    { id: 1, name: '결재라인' },
  ];

  const [formNav, setFormNav] = useState(form_nav_sample_data);

  return (
    <>
      <div className={styled.title_area}>
        <Title text={'양식상세'} font_size={'18px'}></Title>
        <div className={styled.button_area}>
          <button>저장</button>
        </div>
      </div>
      <div className={styled.form_nav_area}>
        {formNav.map((ele, index) => {
          return (
            <div key={index}>
              <button>{ele.name}</button>
              {index !== formNav.length - 1 ? <RxDividerVertical /> : null}
            </div>
          );
        })}
      </div>
      <div className={styled.form_detail_area}>
        <DetailTable />
      </div>
    </>
  );
}
