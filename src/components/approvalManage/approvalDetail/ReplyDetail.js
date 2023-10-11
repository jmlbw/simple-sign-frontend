import React from 'react';
import styled from '../../../styles/components/approvalManage/approvalDetail/ReplyDetail.module.css';
import Button from '../../common/Button';

export default function ReplyDetail({
  replyId,
  user,
  regdate,
  content,
  groupOrd,
  groupNo,
  index,
  isSecondDept,
  handleInsertReply,
}) {
  return (
    <div>
      <div className={isSecondDept ? styled.container : ''}>
        <div>사진</div>
        <div>{user}</div>
        <div>{regdate}</div>
        <div>{content}</div>
        <div className={isSecondDept ? styled.hideReplyContent : ''}>
          <Button
            label={'댓글작성'}
            btnStyle={'blue_btn'}
            onClick={() => {
              handleInsertReply(index);
            }}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
