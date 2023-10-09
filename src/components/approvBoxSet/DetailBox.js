import React, { useEffect, useState } from 'react';
import Datalist from './Datalist';
import Radiobtn from './Radiobtn';
import PopUp from '../common/PopUp';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';
import getBoxDetail from '../../apis/approvalBoxAPI/getBoxDetail';
import ViewItem from './DetailBox/ViewItem';
import BoxCompany from './DetailBox/BoxCompany';
import BoxName from './DetailBox/BoxName';
import BoxUseStatus from './DetailBox/BoxUseStatus';
import MenuUseRange from './DetailBox/MenuUseRange';

const commonCellStyle = {
  width: '30%',
};

const commonDataStyle = {
  width: '70%',
};

function DetailBox({ boxId }) {
  const [menuOption, setMenuOption] = useState('T');
  const [useStatus, setUseStatus] = useState(1);
  const [data, setData] = useState([]);

  const handleUseStatusChange = (event) => {
    setUseStatus(event.target.value);
  };

  const handleInputChange = (e) => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedBoxId = parseInt(boxId, 10);
        if (!isNaN(parsedBoxId)) {
          const response = await getBoxDetail(parsedBoxId);
          setData(response.data);
          if (response.data.length > 0) {
            setUseStatus(
              response.data[0].approvalBoxUsedStatus === 1 ? '사용' : '미사용'
            );
            setMenuOption(response.data[0].menuUsingRange);
          }
        }
      } catch (error) {
        console.error('Error fetching box details:', error);
      }
    };

    fetchData();
  }, [boxId]);

  return (
    <div className={styled.formcontainer}>
      {data.map((boxDetail, index) => (
        <React.Fragment key={index}>
          <BoxCompany
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            compId={boxDetail.compId}
          />
          <BoxName
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            handleInputChange={handleInputChange}
            boxName={boxDetail.approvalBoxName}
          />
          <ViewItem
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
          />
          <BoxUseStatus
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            useStatus={useStatus}
            handleUseStatusChange={handleUseStatusChange}
          />
          <MenuUseRange
            commonCellStyle={commonCellStyle}
            commonDataStyle={commonDataStyle}
            menuOption={menuOption}
            setMenuOption={setMenuOption}
          />
          <div className={styled.inputItem}>
            <div style={commonCellStyle}>
              <div className={styled.text}>정렬순서</div>
            </div>
            <div style={commonDataStyle}>
              <div>
                <input
                  type="text"
                  value={boxDetail.sortOrder}
                  className={styled.inputstyle}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default DetailBox;
