import styled from '../styles/pages/HomePage.module.css';
import React from 'react';

export default function HomePage() {
  return (
    <div className={styled.container}>
      <div className={styled.recoFormArea}>추천양식</div>
      <div className={styled.favoriteArea}>즐겨찾기</div>
      <div className={styled.processDocArea}>진행문서</div>
      <div className={styled.receRefArea}>받은수신</div>
      <div className={styled.timeLineArea}>타임라인</div>
    </div>
  );
}
