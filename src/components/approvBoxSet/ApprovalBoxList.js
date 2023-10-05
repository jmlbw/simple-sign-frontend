import React, { useState, useEffect } from 'react';
import styled from '../../styles/components/ApprovalBox/ApprovalBoxList.module.css';
import { BiSolidFolder } from 'react-icons/bi';
import getDocBoxList from '../../apis/approvalBoxAPI/getApprovalBox';
import { useApprovalBoxManage } from '../../contexts/ApprovalBoxManageContext';

function ApprovalBoxList({ companyId }) {
  const { state, setState } = useApprovalBoxManage();
  const [data, setData] = useState([]);

  function boxNameClickHandler(boxId) {
    setState((prevState) => ({ ...prevState, boxId: boxId }));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const company = companyId; // 원하는 값으로 설정하세요
        const response = await getDocBoxList(company);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
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

          <div className={styled.deleteButton}>삭제</div>
        </div>
      ))}
    </div>
  );
}

export default ApprovalBoxList;
