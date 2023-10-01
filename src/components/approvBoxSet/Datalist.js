import React, { useState } from 'react';
import Select from 'react-select';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';

const Datalist = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
    { value: 'option4', label: '옵션 4' },
    { value: 'option5', label: '옵션 5' },
  ];
  const defaultValue = options[0];

  const customStyles = {
    control: (base) => ({
      ...base,
      height: '27px',
      minHeight: '27px',
    }),
    option: (styles) => ({
      ...styles,
      display: 'flex',
      alignItems: 'center', // 세로 중앙 정렬 설정
      height: '20px',
    }),
    singleValue: (base) => ({
      ...base,
      height: '20px',
      lineHeight: '20px',
    }),
    indicatorSeparator: (base) => ({
      ...base,
      height: '15px',
      margin: '5px',
    }),
    indicatorsContainer: (base) => ({
      ...base,
      height: '27px',
      margin: 0,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      height: '27px',
      padding: '3px',
    }),
    menu: (base) => ({
      ...base,
      marginTop: '2px', // 옵션 목록의 상단 마진 조정
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '200px', // 옵션 목록의 최대 높이 설정
    }),
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className={styled.selectbox}>
      <Select
        defaultValue={defaultValue}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={true}
        className={styled.customSelect}
        styles={customStyles}
      />
    </div>
  );
};

export default Datalist;
