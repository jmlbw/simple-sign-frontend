import React from 'react';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';
import Button from '../../components/common/Button';
import InnerBox from '../common/InnerBox';
import Datalist from './Datalist';
import Radiobtn from './Radiobtn';

// 공통 스타일
const commonCellStyle = {
  width: '30%',
};

const commonDataStyle = {
  width: '70%',
};

function DetailApprovalBox() {
  return (
    <InnerBox
      height="100%"
      width="50%"
      font_size="14px"
      text="결재함 상세"
      titleChildren={<Button label={'저장'} btnStyle={'gray_btn'} />}
    >
      <tbody
        className={styled.formcontainer}
        style={{ width: '100%', display: 'block' }}
      >
        <div className={styled.inputItem}>
          <th style={commonCellStyle}>
            <div className={styled.text}>회사</div>
          </th>
          <td style={commonDataStyle}>
            <Datalist />
          </td>
        </div>
        <div className={styled.inputItem}>
          <th style={commonCellStyle}>
            <div className={styled.text}>명칭</div>
          </th>
          <td style={commonDataStyle}>
            <div>
              <input type="text" className={styled.inputstyle} />
            </div>
          </td>
        </div>
        <div className={styled.inputItem}>
          <th style={commonCellStyle}>
            <div className={styled.text}>조회항목</div>
          </th>
          <td style={commonDataStyle}>
            <div className={styled.viewUseField}>
              <div className={styled.viewItemBox}></div>
              <button className={styled.btn}></button>
            </div>
          </td>
        </div>
        <div className={styled.inputItem}>
          <th style={commonCellStyle}>
            <div className={styled.text}>사용여부</div>
          </th>
          <td style={commonDataStyle}>
            <div>
              <Radiobtn labels={['사용', '미사용']} />
            </div>
          </td>
        </div>
        <div className={styled.inputItem}>
          <th style={commonCellStyle}>
            <div className={styled.text}>메뉴 사용범위</div>
          </th>
          <td style={commonDataStyle}>
            <Radiobtn labels={['전체', '선택']} />
            <div className={styled.viewUseField}>
              <div className={styled.viewItemBox}></div>
              <button className={styled.btn}></button>
            </div>
          </td>
        </div>
        <div className={styled.inputItem}>
          <th style={commonCellStyle}>
            <div className={styled.text}>명칭</div>
          </th>
          <td style={commonDataStyle}>
            <div>
              <input type="text" className={styled.inputstyle} />
            </div>
          </td>
        </div>
      </tbody>
    </InnerBox>
  );
}

export default DetailApprovalBox;
