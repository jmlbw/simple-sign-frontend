import styled from '../styles/components/ApprovalBox/DocItem.module.css';
import userIcon from '../assets/imgs/default_profile.png';
import DoneIcon from '../assets/imgs/done.png';

function DocItem() {
  return (
    <div>
      <li className={styled.itembox}>
        <div className={styled.checkboxArea}>
          <input type="checkbox"></input>
        </div>
        <div className={styled.dateText}>09-15 (금) 19:22</div>
        <div className={styled.element}>
          <div className={styled.elementText}>
            <span>테스트입니다.</span>
          </div>
          <div className={styled.info}>
            <div className={styled.txtinfo}>물품수리요청서</div>
            <div className={styled.txtinfo}>|</div>
            <div className={styled.txtinfo}>
              *솔루션사업부문*-20230915-001김비파
            </div>
          </div>
        </div>
        <div className={styled.docUser}>
          <div className={styled.imginfo}>
            <img src={userIcon} alt="userphoto" />
          </div>
          <div className={styled.userinfo}>
            <div className={styled.name}>김비파</div>
            <div className={styled.departementInfo}>
              <div className={styled.departementList}>
                <div className={styled.txtdep}>*솔루션사업부문*</div>
                <div className={styled.txtdep}>|</div>
                <div className={styled.txtdep}>검수부서2</div>
              </div>
            </div>
          </div>
          <div className={styled.docStatus}>
            <div className={styled.process}>
              <img src={DoneIcon} alt="statusIcon" />
              <div className={styled.txtline}>
                <span>종결</span>
                <span>(김비파2)</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
export default DocItem;
