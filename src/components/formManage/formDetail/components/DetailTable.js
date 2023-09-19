import { useState } from 'react';
import styled from '../../../../styles/components/formManage/formDetail/components/DetailTable.module.css';
import DragDrop from './DragDrop';

export default function DetailTable({ tableList, onChangeFunc }) {
  //조직도 콜백을 통해 값 가져오기

  const inputForm = (id, title, data) => {
    return (
      <tr>
        <td className={styled.table_title_td}>{title}</td>
        <td className={styled.table_content_td}>
          <input
            type="text"
            value={data}
            onChange={(e) => {
              onChangeFunc(id, e.target.value);
            }}
          />
        </td>
      </tr>
    );
  };

  const areaForm = (id, title, data) => {
    return (
      <tr>
        <td className={`${styled.table_title_td} ${styled.table_area_type}`}>
          {title}
        </td>
        <td className={`${styled.table_content_td} ${styled.table_area_type}`}>
          <div>
            {data.map((ele, index) => {
              return <div key={index}>{ele}</div>;
            })}
          </div>
        </td>
      </tr>
    );
  };

  const radioForm = (id, title, data, form) => {
    return (
      <tr>
        <td className={styled.table_title_td}>{title}</td>
        <td className={`${styled.table_content_td} ${styled.table_radio_type}`}>
          <div>
            <input
              type="radio"
              name="used"
              value="사용"
              checked={data === '사용'}
              onChange={(e) => {
                onChangeFunc(id, e.target.value);
              }}
            />
            {form[0]}
            <input
              type="radio"
              name="used"
              value="미사용"
              checked={data === '미사용'}
              onChange={(e) => {
                onChangeFunc(id, e.target.value);
              }}
            />
            {form[1]}
          </div>
        </td>
      </tr>
    );
  };

  const fileForm = (id, title) => {
    return (
      <tr>
        <td className={styled.table_title_td}>{title}</td>
        <td className={`${styled.table_file_td} ${styled.table_file_type}`}>
          <DragDrop name={title} id={id} onChangeFunc={onChangeFunc} />
        </td>
      </tr>
    );
  };

  const assetRender = (ele) => {
    switch (ele.type) {
      case 'input':
        return inputForm(ele.id, ele.name, ele.data);
      case 'area':
        return areaForm(ele.id, ele.name, ele.data);
      case 'radio':
        return radioForm(ele.id, ele.name, ele.data, ele.form);
      case 'file':
        return fileForm(ele.id, ele.name);
      default:
    }
  };

  return (
    <>
      <table className={styled.form_detail_table}>
        {tableList.map((ele) => {
          return assetRender(ele);
        })}
      </table>
    </>
  );
}
