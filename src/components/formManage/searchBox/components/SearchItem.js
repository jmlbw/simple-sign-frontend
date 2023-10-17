import styled from '../../../../styles/components/formManage/searchBox/components/SearchItem.module.css';
import SearchDate from '../../../approvalBox/SearchDate';
import React from 'react';

const ItemBox = ({ children }) => {
  return <div className={styled.itemBox}>{children}</div>;
};

const TextComp = ({ text }) => {
  return <p className={styled.title}>{text}</p>;
};

const InputComp = ({ id, dataHandler, width, placeholder }) => {
  return (
    <div className={styled.inputBox} style={{ width: `${width}` }}>
      <input
        className={styled.input}
        style={{ width: `${width}` }}
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          dataHandler(id, e.target.value);
        }}
      />
    </div>
  );
};

const SelectComp = ({ id, width, options, dataHandler, value }) => {
  const [localValue, setLocalValue] = React.useState(value);

  React.useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (dataHandler) {
      dataHandler(id, selectedValue);
    }
    setLocalValue(selectedValue); // 사용자가 선택한 값을 내부 상태에도 반영
  };

  return (
    <select
      className={styled.select}
      style={{ width: `${width}` }}
      value={localValue} // 항상 localValue를 사용하여 현재 선택된 값을 표시
      onChange={handleChange}
    >
      {options.map((ele, index) => (
        <option key={index} value={ele.id}>
          {ele.name}
        </option>
      ))}
    </select>
  );
};

const DateComp = (dataHandler) => {
  return <SearchDate />;
};

export { ItemBox, TextComp, InputComp, DateComp, SelectComp };
