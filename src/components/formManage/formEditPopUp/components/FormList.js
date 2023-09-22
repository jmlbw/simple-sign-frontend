import styled from '../../../../styles/components/formManage/formEdit/components/FormList.module.css';
import React from 'react';
import { TyniEditor, CustomButton } from '../../../common/TyniEditor';

export default function FormList({ formItems, editor }) {
  const sample_form_list = [
    { id: 1, title: '품의번호', data: `<div id="sn">test</div>` },
    { id: 2, title: '수신참조', data: `<div id="sc">sample</div>` },
  ];
  return (
    <div className={styled.formListContainer}>
      <div className={styled.searchArea}>
        <input type="text" placeholder="검색할 항목을 입력하세요..." />
      </div>

      <div className={styled.formListArea}>
        {formItems.map((ele) => {
          return (
            <CustomButton
              key={ele.formListName}
              label={ele.formListName}
              editor={editor}
              text={ele.formListTag}
            ></CustomButton>
          );
        })}
      </div>
    </div>
  );
}
