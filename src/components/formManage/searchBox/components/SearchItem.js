import { useState, useEffect } from 'react';
import styled from '../../../../styles/components/formManage/searchBox/components/SearchItem.module.css';

export default function SearchItem({ title, type }) {
  const [selectList, setSelectList] = useState([]);

  const sample_comp_data = [
    { id: 1, name: '(주) 더존' },
    { id: 2, name: '비트컴퓨터' },
  ];

  const sample_form_data = [
    { id: 1, name: '예' },
    { id: 2, name: '아니요' },
  ];

  const sample_date_data = [
    { id: 1, name: '결재일' },
    { id: 2, name: '수정일' },
  ];

  useEffect(() => {
    if (type === 'select') {
      if (title === '회사') {
        setSelectList(sample_comp_data);
      } else if (title === '사용여부') {
        setSelectList(sample_form_data);
      }
    }
    if (title === 'select') {
      setSelectList(sample_date_data);
    }
  }, []);

  const InputComp = () => {
    return (
      <div className={styled.inputBox}>
        <input className={styled.input} type={type} />
      </div>
    );
  };

  const SelectComp = ({ width = 170 }) => {
    return (
      <select className={styled.select} style={{ width: `${width}px` }}>
        {selectList.length !== 0
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
  };

  const searchSelectSub = () => {
    switch (type) {
      case 'text':
        return <InputComp />;
      case 'select':
        return <SelectComp />;
      default:
        return null;
    }
  };

  return (
    <div className={styled.itemBox}>
      {title === 'select' ? (
        <>
          <SelectComp width={100} /> <InputComp />
        </>
      ) : (
        <>
          <p className={styled.title}>{title}</p>
          {searchSelectSub()}
        </>
      )}
    </div>
  );
}
