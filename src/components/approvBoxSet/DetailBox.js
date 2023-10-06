import React, { useEffect, useState } from 'react';
import Datalist from './Datalist';
import Radiobtn from './Radiobtn';
import PopUp from '../common/PopUp';
import ViewItemPopup from './ViewItemPopup';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';
import getBoxDetail from '../../apis/approvalBoxAPI/getBoxDetail';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  // 모달을 닫기 위한 함수
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuOptionChange = (event) => {
    setMenuOption(event.target.value);
  };

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
          <div className={styled.inputItem}>
            <div style={commonCellStyle}>
              <div className={styled.text}>회사</div>
            </div>
            <div style={commonDataStyle}>
              <Datalist selectedCompId={boxDetail.compId} />
            </div>
          </div>
          <div className={styled.inputItem}>
            <div style={commonCellStyle}>
              <div className={styled.text}>명칭</div>
            </div>
            <div style={commonDataStyle}>
              <div>
                <input
                  type="text"
                  value={boxDetail.approvalBoxName}
                  className={styled.inputstyle}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className={styled.inputItem}>
            <div style={commonCellStyle}>
              <div className={styled.text}>조회항목</div>
            </div>
            <div style={commonDataStyle}>
              <div className={styled.viewUseField}>
                <div className={styled.viewItemBox}></div>
                <ViewItemPopup />
              </div>
            </div>
          </div>
          <div className={styled.inputItem}>
            <div style={commonCellStyle}>
              <div className={styled.text}>사용여부</div>
            </div>
            <div style={commonDataStyle}>
              <div>
                <Radiobtn
                  labels={['사용', '미사용']}
                  selectedOption={useStatus}
                  onChange={handleUseStatusChange}
                />
              </div>
            </div>
          </div>
          <div className={styled.inputItem}>
            <div style={commonCellStyle}>
              <div className={styled.text}>메뉴 사용범위</div>
            </div>
            <div style={commonDataStyle}>
              <Radiobtn
                labels={['전체', '선택']}
                values={['T', 'P']} // 여기에 values 추가
                selectedOption={menuOption}
                onChange={handleMenuOptionChange}
              />
              {menuOption === 'P' && ( // menuOption이 'P'일 때만 렌더링
                <div className={styled.viewUseField}>
                  <div className={styled.viewItemBox}></div>
                  <PopUp
                    title="메뉴 사용범위"
                    width="1300px"
                    height="600px"
                    isModalOpen={isModalOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                    label={<AccountTreeRoundedIcon style={{ color: 'grey' }} />}
                  />
                </div>
              )}
            </div>
          </div>
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
