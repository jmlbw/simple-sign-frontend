import OptionboxItem from './OptionboxItem';
import { BiSolidUser, BiSolidFolder, BiBuildings } from 'react-icons/bi';
import React, { useState } from 'react';

function Optionbox({ id, category, name, useId, dataHandler }) {
  const [department] = useState(category);
  const [cName, setCName] = useState(name);

  const handleValueChange = () => {
    // value 상태를 변경
    dataHandler(id, category, name, useId);
    console.log('삭제');
  };

  /* department 값 바꾸는 부분 */

  let icon = null;

  if (department === 'null') {
  } else if (department === 'U') {
    icon = <BiSolidUser />;
  } else if (department === 'D') {
    icon = <BiSolidFolder />;
  } else if (department === 'C') {
    icon = <BiBuildings />;
  }

  return (
    <div>
      <OptionboxItem
        icon={icon}
        name={cName}
        onValueChange={handleValueChange}
      ></OptionboxItem>
    </div>
  );
}
export default Optionbox;
