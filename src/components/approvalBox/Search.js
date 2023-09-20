import styled from '../../styles/components/ApprovalBox/Search.module.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Search() {
  return (
    <div className={styled.searchbox}>
      <input type="text" placeholder=" 검색"></input>
      <button type="submit">
        <SearchSharpIcon></SearchSharpIcon>
      </button>
    </div>
  );
}
export default Search;
