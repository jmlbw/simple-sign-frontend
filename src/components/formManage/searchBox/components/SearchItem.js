import styled from '../../../../styles/components/formManage/searchBox/components/SearchItem.module.css';
import SearchDate from '../../../approvalBox/SearchDate';
import React from 'react';

const ItemBox = ({ children }) => {
  return <div className={styled.itemBox}>{children}</div>;
};

const TextComp = ({ text }) => {
  return <p className={styled.title}>{text}</p>;
};

const InputComp = ({ id, dataHandler, width }) => {
  return (
    <div className={styled.inputBox} style={{ width: `${width}` }}>
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

const SelectComp = ({ id, width, options, dataHandler }) => {
  return (
    <select
      className={styled.select}
      style={{ width: `${width}` }}
      onChange={(e) => {
        dataHandler(id, e.target.value);
      }}
    >
      {options
        ? options.map((ele, index) => {
            return (
              <option key={index} value={ele.value}>
                {ele.name}
              </option>
            );
          })
        : null}
    </select>
  );
};

const DateComp = (dataHandler) => {
  return <SearchDate />;
};

export { ItemBox, TextComp, InputComp, DateComp, SelectComp };
