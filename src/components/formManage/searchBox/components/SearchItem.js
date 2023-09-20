import styled from '../../../../styles/components/formManage/searchBox/components/SearchItem.module.css';
import SearchDate from '../../../approvalBox/SearchDate';
import React from 'react';

export default function SearchItem({ id, asset1, asset2, data, dataHandler }) {
  const inputComp = () => {
    return (
      <div className={styled.inputBox}>
        <input
          className={styled.input}
          type="text"
          onChange={(e) => {
            dataHandler(id, e.target.value);
          }}
        />
      </div>
    );
  };

  const selectComp = (width = 170) => {
    return (
      <select
        className={styled.select}
        style={{ width: `${width}px` }}
        onChange={(e) => {
          let value = null;
          if (e.target.value === '예') {
            value = 1;
          } else if (e.target.value === '아니요') {
            value = 0;
          } else {
            value = e.target.value;
          }
          dataHandler(id, value);
        }}
      >
        {data.length !== 0
          ? data.map((ele, index) => {
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

  const assetRender = (asset) => {
    if (asset === 'select') {
      return <>{asset1 === 'select' ? selectComp(70) : selectComp()}</>;
    } else if (asset === 'text') {
      return inputComp();
    } else if (asset === 'date') {
      return <SearchDate />;
    } else {
      return <p className={styled.title}>{asset}</p>;
    }
  };

  return (
    <div className={styled.itemBox}>
      {assetRender(asset1)}
      {assetRender(asset2)}
    </div>
  );
}
