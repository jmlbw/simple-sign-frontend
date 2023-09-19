import styled from '../../styles/components/ApprovalBox/ViewDocBox.module.css';
import DocItem from '../../pages/DocItem';

function ViewDocBox() {
  return (
    <div className={styled.container}>
      <div className={styled.tableheader}>
        <div className={styled.titleAndcontents}>
          <span className={styled.title}>제목/문서번호</span>
          <span className={styled.title}>기안자/기안부서</span>
          <span className={styled.title}>결재상태</span>
        </div>
      </div>
      <div className={styled.docContainer}>
        <ul className={styled.docList}>
          <DocItem></DocItem>
          <DocItem></DocItem>
          <DocItem></DocItem>
          <DocItem></DocItem>
          <DocItem></DocItem>
          <DocItem></DocItem>
          <DocItem></DocItem>
          <DocItem></DocItem>
        </ul>
      </div>
    </div>
  );
}
export default ViewDocBox;
