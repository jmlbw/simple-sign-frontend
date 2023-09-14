import styled from '../../../styles/components/formManage/searchBox/SearchBox.module.css';
import SearchItem from './components/SearchItem.js';
import { AiOutlineSearch } from 'react-icons/ai';
export default function SearchBox() {
  let searchOptions = [
    { title: '회사', type: 'select' },
    { title: '사용여부', type: 'select' },
    { title: '양식명', type: 'text' },
  ];
  return (
    <div className={styled.search_box_container}>
      {searchOptions.map((ele, index) => {
        return (
          <SearchItem
            key={index}
            title={ele.title}
            inputType={ele.type}
          ></SearchItem>
        );
      })}
      <div className={styled.search_icon_box}>
        <AiOutlineSearch />
      </div>
    </div>
  );
}
