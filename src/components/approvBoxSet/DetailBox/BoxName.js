import React from 'react';
import styled from '../../../styles/pages/ApprovalBoxSetPage.module.css';
import { useApprovalBoxManage } from '../../../contexts/ApprovalBoxManageContext';
import { useState, useEffect } from 'react';

function BoxName(props) {
  const [localBoxName, setLocalBoxName] = useState(null);
  const { approvalBoxState, setApprovalBoxState, state } =
    useApprovalBoxManage();

  useEffect(() => {
    if (state.count != 0) {
      setLocalBoxName(null);
    }
  }, [state.count]);

  const handleLocalInputChange = (e) => {
    const updatedName = e.target.value;
    setLocalBoxName(updatedName);
    setApprovalBoxState((prevState) => ({
      ...prevState,
      approvalBoxName: updatedName,
    }));
    props.handleInputChange && props.handleInputChange(e);
  };

  return (
    <div className={styled.inputItem}>
      <div style={props.commonCellStyle}>
        <div className={styled.text}>
          <span className={styled.notnull}>*</span>명칭
        </div>
      </div>
      <div style={props.commonDataStyle}>
        <div>
          <input
            type="text"
            value={localBoxName ? localBoxName : props.boxName}
            className={styled.inputstyle}
            onChange={handleLocalInputChange}
          />
        </div>
      </div>
    </div>
  );
}
export default BoxName;
