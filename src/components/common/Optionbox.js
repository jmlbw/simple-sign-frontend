import OptionboxItem from './OptionboxItem';
import { BiSolidUser, BiSolidFolder, BiBuildings } from 'react-icons/bi';
import { AiFillFolder } from 'react-icons/ai';
import React, { useState } from 'react';

function Optionbox({ id, category, name, useId, dataHandler }) {
  let icon = null;

  if (category === 'null') {
  } else if (category === 'U') {
    icon = <BiSolidUser />;
  } else if (category === 'D') {
    icon = <BiSolidFolder />;
  } else if (category === 'C') {
    icon = <BiBuildings />;
  } else if (category === 'E') {
    icon = <AiFillFolder />;
  }

  return (
    <div>
      <OptionboxItem
        icon={icon}
        name={name}
        id={id}
        category={category}
        useId={useId}
        onValueChange={dataHandler}
      ></OptionboxItem>
    </div>
  );
}
export default Optionbox;
