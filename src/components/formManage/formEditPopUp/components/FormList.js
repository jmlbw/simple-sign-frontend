import styled from '../../../../styles/components/formManage/formEdit/components/FormList.module.css';
import React from 'react';

export default function FormList() {
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
        {sample_form_list.map((ele) => {
          return (
            <div key={ele.id} className={styled.formListItem}>
              {ele.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
