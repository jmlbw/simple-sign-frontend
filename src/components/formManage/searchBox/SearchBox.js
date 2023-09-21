import styled from '../../../styles/components/formManage/searchBox/SearchBox.module.css';
import SearchItem from './components/SearchItem.js';
import { AiOutlineSearch } from 'react-icons/ai';
import React from 'react';

export default function SearchBox({
  searchOptions,
  dataHandler,
  searchHandler,
}) {
  return (
    <div className={styled.search_box_container}>
      <div className={styled.search_options_container}>
        {searchOptions.map((ele, index) => {
          return (
            <SearchItem
              key={index}
              id={ele.id}
              asset2={ele.asset2}
              asset1={ele.asset1}
              data={ele.data}
              dataHandler={dataHandler}
            ></SearchItem>
          );
        })}
      </div>
      <div className={styled.search_icon_box} onClick={searchHandler}>
        <AiOutlineSearch />
      </div>
    </div>
  );
}
