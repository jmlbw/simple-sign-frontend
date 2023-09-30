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
  const customStyles = {
    control: (base) => ({
      ...base,
      height: '40px',
      width: '100%',
    }),
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={true}
        className={styled.customSelect}
      />
    </div>
  );
};

export default Datalist;
