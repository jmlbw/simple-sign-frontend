import styled from '../../../styles/components/formManage/formSelectPopUp/FormSelect.module.css';
import FormList from '../formList/FormList';
import React from 'react';
import {
  columns,
  fields,
  rows,
} from '../../../assets/datas/formList_sample_data';

export default function FormSelect() {
  return (
    <div className={styled.formSelectContainer}>
      <div className={styled.formSelectSearchArea}>
        <input type="text" placeholder="양식명을 입력하세요..." />
      </div>
      <div className={styled.formSelectTableArea}>
        {/* <FormList columns={columns} fields={fields} rows={rows} /> */}
      </div>
    </div>
  );
}
