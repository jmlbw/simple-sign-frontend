import React, { useState } from 'react';
import Button from './Button';
import Modal from '@mui/material/Modal';
import styles from '../../styles/components/common/PopUp.module.css';
import PopUpFoot from './PopUpFoot';

export default function PopUp(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const popUpStyle = {
    width: props.width,
    height: props.height,
  };

  // 버튼 스타일
  // popup_gray_btn //큰 회색버튼
  // popup_blue_btn //큰 파란버튼
  // gray_btn //작은 회색버튼
  // blue_btn //큰 회색버튼

  const grayAndBlueBtn = [
    { label: '미리보기', onClick: () => {}, btnStyle: 'popup_gray_btn' },
    {
      label: '반영',
      onClick: () => {},
      btnStyle: 'popup_blue_btn',
    },
  ];

  const popContentSelector = () => {
    switch (props.title) {
      case '양식파일편집':
        return (
          <>
            <div className={styles.contentContainer}>
              <div>{props.children}</div>
            </div>
            <PopUpFoot buttons={grayAndBlueBtn} />
          </>
        );
      // case '양식선택':
      //   return (
      //     <div>
      //       <div>{props.children}</div>
      //       <PopUpFoot buttons={props.buttons} />
      //     </div>
      //   );
      // case '채번설정':
      //   return (
      //     <div>
      //       <div>{props.children}</div>
      //       <PopUpFoot buttons={props.buttons} />
      //     </div>
      //   );
      // case '결재작성상세':
      //   return (
      //     <div>
      //       <div>{props.children}</div>
      //       <PopUpFoot buttons={props.buttons} />
      //     </div>
      //   );
      // case '회사사업장부서선택':
      //   return (
      //     <div>
      //       <div>{props.children}</div>
      //       <PopUpFoot buttons={props.buttons} />
      //     </div>
      //   );
      // case '회사부서사용자선택':
      //   return (
      //     <div>
      //       <div>{props.children}</div>
      //       <PopUpFoot buttons={props.buttons} />
      //     </div>
      //   );
      default:
    }
  };

  return (
    <div>
      <Button label={props.label} onClick={handleOpen}></Button>
      <Modal open={open} onClose={handleClose}>
        <div className={styles.popUpContainer} style={popUpStyle}>
          <div className={styles.header}>{props.title}</div>
          {popContentSelector()}
        </div>
      </Modal>
    </div>
  );
}
