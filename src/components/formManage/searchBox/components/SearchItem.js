import { useState, useEffect } from 'react';
import styled from '../../../../styles/components/formManage/searchBox/components/SearchItem.module.css';

export default function SearchItem({ asset1, asset2, data }) {
  const [selectList, setSelectList] = useState([]);

  useEffect(() => {
    if (data.length > 1) {
      setSelectList(data);
    }
  }, []);

  const InputComp = ({ type }) => {
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

  // const searchSelectSub = () => {
  //   switch (type) {
  //     case 'text':
  //       return <InputComp />;
  //     case 'select':
  //       return <SelectComp />;
  //     default:
  //       return null;
  //   }
  // };

  const assetRender = (asset) => {
    if (asset === 'select') {
      return <SelectComp />;
    } else if (asset === 'text') {
      return <InputComp type={'text'} />;
    } else if (asset === 'date') {
      return <InputComp type={'date'} />;
    } else {
      return <p className={styled.title}>{asset}</p>;
    }
  };

  return (
    <div className={styled.itemBox}>
      {/* {title === 'select' ? (
        <>
          <SelectComp width={100} /> <InputComp />
        </>
      ) : (
        <>
          <p className={styled.title}>{title}</p>
          {searchSelectSub()}
        </>
      )} */}

      {assetRender(asset1)}
      {assetRender(asset2)}
    </div>
  );
}
