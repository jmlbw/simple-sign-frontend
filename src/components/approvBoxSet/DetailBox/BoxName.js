import React from 'react';
import styled from '../../../styles/pages/ApprovalBoxSetPage.module.css';

function BoxName(props) {
  return (
    <div className={styled.inputItem}>
      <div style={props.commonCellStyle}>
        <div className={styled.text}>명칭</div>
      </div>
      <div style={props.commonDataStyle}>
        <div>
          <input
            type="text"
            value={props.boxName}
            className={styled.inputstyle}
            onChange={props.handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}
export default BoxName;
