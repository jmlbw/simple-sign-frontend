import React from 'react';
import Button from '../../common/Button';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import styled from '../../../styles/components/approvalManage/approvalDetail/ReplyBox.module.css';
import { styled as MUIStyled } from '@mui/material';

export default function ({
  replyRef,
  replyId,
  groupNo,
  index,
  handleReplyInsert,
}) {
  return (
    <div className={styled.replycontainer}>
      <textarea placeholder="댓글을 입력하세요" ref={replyRef}></textarea>
      <div className={styled.btnarea}>
        <Button
          className={styled.insertBoxArea}
          label={'등록'}
          btnStyle={'green_btn'}
          height="36px"
          width="52px"
          fontSize="12.4px"
          onClick={() => {
            handleReplyInsert(replyId, index, groupNo);
          }}
        />
      </div>
    </div>
  );
}
