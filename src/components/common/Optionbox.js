import OptionboxItem from './OptionboxItem';
import { BiSolidUser, BiSolidFolder, BiBuildings } from 'react-icons/bi';
import React, { useState } from 'react';

function Optionbox() {
  const [department] = useState('company');
  const [value, setValue] = useState('true');

  const handleValueChange = (newValue) => {
    // value 상태를 변경
    setValue(newValue);
  };

  /* department 값 바꾸는 부분 */

  let icon = null;

  if (department === 'null') {
  } else if (department === 'user') {
    icon = <BiSolidUser />;
  } else if (department === 'department') {
    icon = <BiSolidFolder />;
  } else if (department === 'company') {
    icon = <BiBuildings />;
  }

  return (
    <div>
      <OptionboxItem
        icon={icon}
        value={value}
        onValueChange={handleValueChange}
      ></OptionboxItem>
    </div>
  );
}
export default Optionbox;
