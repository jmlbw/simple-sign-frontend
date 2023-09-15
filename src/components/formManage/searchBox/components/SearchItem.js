import { useState, useEffect } from 'react';
import styled from '../../../../styles/components/formManage/searchBox/components/SearchItem.module.css';

export default function SearchItem({ title, inputType }) {
  const [selectList, setSelectList] = useState([]);

  const sample_comp_data = [
    { id: 1, name: '(주) 더존' },
    { id: 2, name: '비트컴퓨터' },
  ];

  const sample_form_data = [
    { id: 1, name: '예' },
    { id: 2, name: '아니요' },
  ];

  useEffect(() => {
    if (inputType === 'select') {
      if (title === '회사') {
        //회사 데이터
        setSelectList(sample_comp_data);
      } else if (title === '사용여부') {
        //양식명 데이터
        setSelectList(sample_form_data);
      }
    }
  }, []);

  const searchSelect = () => {
    switch (inputType) {
      case 'text':
        return (
          <div className={styled.inputBox}>
            <input className={styled.input} type={inputType} />
          </div>
        );
      case 'select':
        return (
          <select className={styled.select}>
            {selectList !== []
              ? selectList.map((ele, index) => {
                  return (
                    <option key={index} value={ele.name}>
                      {ele.name}
                    </option>
                  );
                })
              : null}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styled.itemBox}>
      <p className={styled.title}>{title}</p>
      {searchSelect()}
    </div>
  );
}
