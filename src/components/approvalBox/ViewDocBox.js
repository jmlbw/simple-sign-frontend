import styled from '../../styles/components/ApprovalBox/ViewDocBox.module.css';
import DocItem from './DocItem';

function ViewDocBox() {
  return (
    <div className={styled.container}>
      <div className={styled.tableheader}>
        <div className={styled.titleAndcontents}>
          <span className={styled.title1}>기안일</span>
          <span className={styled.title2}>제목/문서번호</span>
          <span className={styled.title3}>기안자/기안부서</span>
          <span className={styled.title4}>결재상태</span>
        </div>
      </div>
      <div className={styled.docContainer}>
        <ul className={styled.docList}>
          <DocItem
            date="09-15 (금) 19:22"
            title="테스트입니다."
            formName="물품수리요청서"
            sendUser="김비파"
            sendDepart="솔루션사업부문"
            sendDepartDetail="검수부서2"
            imgUrl="../../assets/imgs/default_user.png"
            docStatus="반려"
            lastUser="김비파"
          ></DocItem>
          <DocItem
            date="09-15 (금) 19:22"
            title="테스트입니다."
            formName="물품수리요청서"
            sendUser="김비파"
            sendDepart="솔루션사업부문"
            sendDepartDetail="검수부서2"
            imgUrl="../../assets/imgs/default_user.png"
            docStatus="종결"
            lastUser="김비파"
          ></DocItem>
          <DocItem
            date="09-15 (금) 19:22"
            title="테스트입니다dddddddddddd."
            formName="물품수리요청서dddddddddddddddddddddddddddddddddddddd"
            sendUser="김비파"
            sendDepart="솔루션사업부문"
            sendDepartDetail="검수부서2"
            imgUrl="../../assets/imgs/default_user.png"
            docStatus="진행"
            lastUser="김비파"
          ></DocItem>
          <DocItem
            date="09-15 (금) 19:22"
            title="테스트입니다dddddddddddd."
            formName="물품수리요청서dddddddddddddddddddddddddddddddddddddd"
            sendUser="김비파"
            sendDepart="솔루션사업부문"
            sendDepartDetail="검수부서2"
            imgUrl="../../assets/imgs/default_user.png"
            docStatus="진행"
            lastUser="김비파"
          ></DocItem>
          <DocItem
            date="09-15 (금) 19:22"
            title="테스트입니다dddddddddddd."
            formName="물품수리요청서dddddddddddddddddddddddddddddddddddddd"
            sendUser="김비파"
            sendDepart="솔루션사업부문"
            sendDepartDetail="검수부서2"
            imgUrl="../../assets/imgs/default_user.png"
            docStatus="진행"
            lastUser="김비파"
          ></DocItem>
          <DocItem
            date="09-15 (금) 19:22"
            title="테스트입니다dddddddddddd."
            formName="물품수리요청서dddddddddddddddddddddddddddddddddddddd"
            sendUser="김비파"
            sendDepart="솔루션사업부문"
            sendDepartDetail="검수부서2"
            imgUrl="../../assets/imgs/default_user.png"
            docStatus="진행"
            lastUser="김비파"
          ></DocItem>
        </ul>
      </div>
    </div>
  );
}
export default ViewDocBox;
