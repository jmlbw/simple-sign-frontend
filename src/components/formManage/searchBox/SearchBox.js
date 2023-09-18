import styled from '../../../styles/components/formManage/searchBox/SearchBox.module.css';
import SearchItem from './components/SearchItem.js';
import { AiOutlineSearch } from 'react-icons/ai';
export default function SearchBox() {
  let searchOptions = [
    { title: '회사', type: 'select' },
    { title: '사용여부', type: 'select' },
    { title: '양식명', type: 'text' },
    { title: 'select', type: 'date' },
    { title: '기안일', type: 'date' },
    { title: '제목', type: 'text' },
  ];

  return (
    <div className={styled.search_box_container}>
      <div className={styled.search_options_container}>
        {searchOptions.map((ele, index) => {
          return (
            <SearchItem
              key={index}
              type={ele.type}
              title={ele.title}
            ></SearchItem>
          );
        })}
      </div>
      <div className={styled.search_icon_box}>
        <AiOutlineSearch />
      </div>
    </div>
  );
}
