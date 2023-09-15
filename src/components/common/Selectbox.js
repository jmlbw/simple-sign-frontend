import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '../../styles/components/common/Selectbox.module.css';
//list는 외부에서 받아서 사용합니다.
export default function SelectBox({ selectList, width, height }) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          className={styled.selectBox}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {!selectList.isEmpty
            ? selectList.map((ele, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={ele.name}
                    className={styled.selectmenu}
                  >
                    {ele.name}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>
    </div>
  );
}
