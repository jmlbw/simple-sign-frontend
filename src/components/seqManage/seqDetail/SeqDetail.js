import { useState } from 'react';
import styled from '../../../styles/components/formManage/formDetail/FormDetail.module.css';
import Title from '../../common/Title';
import { RxDividerVertical } from 'react-icons/rx';
import SeqDetailTable from './components/SeqDetailTable';
import Button from '../../common/Button';

export default function SeqDetail({ title }) {
  return (
    <>
      <div className={styled.title_area}>
        <Title text={title} font_size={'18px'}></Title>
        <div className={styled.button_area}>
          <Button label={'저장'} btnStyle={'gray_btn'} />
        </div>
      </div>

      <div className={styled.form_detail_area}>
        <SeqDetailTable />
      </div>
    </>
  );
}
