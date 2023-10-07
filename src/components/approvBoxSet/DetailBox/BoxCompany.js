import React from 'react';
import styled from '../../../styles/pages/ApprovalBoxSetPage.module.css';
import Datalist from '../Datalist';

function BoxCompany(props) {
  return (
    <div className={styled.inputItem}>
      <div style={props.commonCellStyle}>
        <div className={styled.text}>회사</div>
      </div>
      <div style={props.commonDataStyle}>
        <Datalist selectedCompId={props.compId} />
      </div>
    </div>
  );
}
export default BoxCompany;
