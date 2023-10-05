import React from 'react';
import styled from '../../styles/components/common/Loading.module.css';
import { useLoading } from '../../contexts/LoadingContext';
import loadingGif from '../../assets/imgs/loading.gif';

const Loading = () => {
  const { isLoading } = useLoading();
  console.log(isLoading);

  return isLoading ? (
    <div className={styled.loading_overlay}>
      {/* <div className={styled.loading_container}> */}
      {/* <div className={styled.loading_spinner}></div> */}
      <img src={loadingGif} alt="로딩 중" className={styled.loading_image} />
      {/* <div className={styled.loading_text}>로딩 중...</div> */}
      {/* </div> */}
    </div>
  ) : null;
};

export default Loading;
