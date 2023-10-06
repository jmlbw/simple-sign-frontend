import React, { useState, useEffect } from 'react';
import styled from '../../styles/components/ApprovalBox/ApprovalBoxList.module.css';
import { BiSolidFolder } from 'react-icons/bi';
import getDocBoxList from '../../apis/approvalBoxAPI/getApprovalBox';
import { useApprovalBoxManage } from '../../contexts/ApprovalBoxManageContext';
import deleteApprovalBox from '../../apis/approvalBoxAPI/deleteApprovalBox';
import PopUp from '../common/PopUp';

function ApprovalBoxList({ companyId }) {
  const { state, setState } = useApprovalBoxManage();
  const [data, setData] = useState([]);

  function boxNameClickHandler(boxId) {
    setState((prevState) => ({ ...prevState, boxId: boxId }));
  }

  const fetchApprovalBoxList = async () => {
    try {
      const company = companyId;
      const response = await getDocBoxList(company);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteBtnHandler = async (btnId) => {
    try {
      await deleteApprovalBox(btnId);
      fetchApprovalBoxList(); // 삭제 후 새로운 목록 가져오기
    } catch (error) {
      console.error('Error deleting box:', error);
    }
  };

  useEffect(() => {
    fetchApprovalBoxList();
  }, [companyId]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.approvalBoxId} className={styled.itemBox}>
          <div className={styled.iconimg}>
            <BiSolidFolder />
          </div>
          <div
            className={styled.boxName}
            onClick={() => boxNameClickHandler(item.approvalBoxId)}
          >
            {item.approvalBoxName}
          </div>
          <div
            className={styled.deleteButton}
            onClick={() => deleteBtnHandler(item.approvalBoxId)}
          >
            삭제
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApprovalBoxList;
