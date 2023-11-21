import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { keyframes } from '@emotion/react';

const slideIn = keyframes`
  from {
    right: -450px; // 시작 위치 -450px
  }
  to {
    right: 0px; // 종료 위치 0px
  }
`;

const slideOut = keyframes`
  from {
    right: 0px; // 시작 위치 0px
  }
  to {
    right: -450px; // 종료 위치 -450px
  }
`;

export default function CustomAlert({ severity, message, open, close }) {
  const animation = open ? slideIn : slideOut;
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      BackdropProps={{
        style: { backgroundColor: 'transparent' },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: '25%',
          right: '0px', // 초기 right 값 고정
          transform: 'translateY(-50%)',
          width: 400,
          boxShadow: 3,
          animation: `${animation} 1s forwards`, // 애니메이션 적용
        }}
      >
        <Alert severity={severity}>
          <AlertTitle>
            {severity.charAt(0).toUpperCase() + severity.slice(1)}
          </AlertTitle>
          {message}
        </Alert>
      </Box>
    </Modal>
  );
}
