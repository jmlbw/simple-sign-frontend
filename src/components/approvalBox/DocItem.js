import styled from '../../styles/components/ApprovalBox/DocItem.module.css';
import sendIcon from '../../assets/imgs/send.png';
import doneIcon from '../../assets/imgs/done.png';
import progressIcon from '../../assets/imgs/progress.png';
import redoIcon from '../../assets/imgs/redo.png';
import defaultUserIcon from '../../assets/imgs/default_user.png';
import React from 'react';

function DocItem(props) {
  //문서상태에 따른 글자색
  const getTxtColor = () => {
    if (props.docStatus === 'A') {
      return '#20C997';
    } else if (props.docStatus === 'P') {
      return '#46A3F0';
    } else if (props.docStatus === 'R') {
      return '#FF8787';
    } else if (props.docStatus === 'W') {
      return '#F0C325';
    } else {
      return '';
    }
  };

  //문서상태에 따른 아이콘
  const getStatusIcon = () => {
    switch (props.docStatus) {
      case 'A':
        return doneIcon; // 종결 아이콘 이미지 경로
      case 'P':
        return progressIcon; // 진행 아이콘 이미지 경로
      case 'R':
        return redoIcon; // 반려 아이콘 이미지 경로
      case 'W':
        return sendIcon; // 상신 아이콘 이미지 경로
      default:
        return ''; // 기본값 (아무 아이콘도 표시하지 않음)
    }
  };

  const getStatusText = () => {
    switch (props.docStatus) {
      case 'A':
        return '승인'; // 종결 텍스트
      case 'P':
        return '진행'; // 진행 텍스트
      case 'R':
        return '반려'; // 반려 텍스트
      case 'W':
        return '상신'; // 상신 텍스트
      default:
        return ''; // 기본값 (아무 텍스트도 표시하지 않음)
    }
  };

  const txtColor = getTxtColor();
  const iconSrc = getStatusIcon();

  return (
    <div>
      <li className={styled.itembox}>
        {/* <div className={styled.checkboxArea}>
          <input type="checkbox"></input>
        </div> */}
        <div className={styled.dateText}>{props.date}</div>
        <div className={styled.element}>
          <div className={styled.elementText}>
            <span>{props.title}</span>
          </div>
          <div className={styled.info}>
            <div className={styled.txtinfo}>{props.formName}</div>
            <div className={styled.bar}>|</div>
            <div className={styled.txtinfo}>{props.docNumber}</div>
          </div>
        </div>
        <div className={styled.docUser}>
          <div className={styled.imginfo}>
            <img src={defaultUserIcon} alt="userphoto" />
          </div>
          <div className={styled.userinfo}>
            <div className={styled.name}>{props.sendUser}</div>
            <div className={styled.departementInfo}>
              <div className={styled.departementList}>
                <div className={styled.txtdep}>{props.sendDepart}</div>
                {/* <div className={styled.txtdep}>|</div> */}
                <div className={styled.txtdep}>{props.sendDepartDetail}</div>
              </div>
            </div>
          </div>
          <div className={styled.docStatus}>
            <div className={styled.process}>
              <img src={iconSrc} alt="statusIcon" />
              <div className={styled.txtline} style={{ color: txtColor }}>
                <span>{getStatusText()}</span>
                <span>{'(' + props.lastUser + ')'}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
export default DocItem;
