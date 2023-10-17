import React from 'react';
import styled from '../../../styles/components/approvalManage/approvalDetail/ReplyDetail.module.css';
// import Button from '../../common/Button';
import { Avatar } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled as MUIStyled } from '@mui/material';

const CustomButton = MUIStyled(Button)({
  width: '0.5em',
  '&.MuiButton-sizeSmall': {
    minWidth: '50px',
  },
});

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
    <div
      className={
        isSecondDept
          ? `${styled.replyDisplay} ${styled.container}`
          : styled.replyDisplay
      }
    >
      {isSecondDept ? <div>ㄴ</div> : null}
      <div>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
      <div style={{ flex: 1 }}>
        {' '}
        <Card
          sx={{ minWidth: 275 }}
          style={{
            backgroundColor: 'rgb(232 232 232 / 61%)',
            marginLeft: '10px',
          }}
        >
          <CardContent>
            <div className={styled.innerDisplay}>
              <div style={{ float: 'left' }}>{user}</div>{' '}
              <div style={{ float: 'right' }}>{regdate}</div>
            </div>
            <br />
            <br />
            <div style={{ textAlign: 'left' }}>{content}</div>
          </CardContent>
          <div style={{ display: 'block' }}>
            <div style={{ float: 'left' }}>
              <CustomButton
                size="small"
                onClick={() => {
                  handleInsertReply(index);
                }}
              >
                수정
              </CustomButton>
              <span>|</span>
              <CustomButton
                size="small"
                onClick={() => {
                  handleInsertReply(index);
                }}
              >
                삭제
              </CustomButton>
            </div>
            <CardActions style={{ display: 'contents' }}>
              <div className={isSecondDept ? styled.hideReplyContent : ''}>
                <div style={{ float: 'right' }}>
                  <Button
                    size="large"
                    onClick={() => {
                      handleInsertReply(index);
                    }}
                  >
                    댓글달기
                  </Button>
                </div>
              </div>
            </CardActions>
          </div>
        </Card>
      </div>
      <hr></hr>
    </div>
  );
}
