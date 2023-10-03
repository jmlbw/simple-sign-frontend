import React, { useState } from 'react';
import Datalist from './Datalist';
import Radiobtn from './Radiobtn';
import PopUp from '../common/PopUp';
import ViewItemPopup from './ViewItemPopup';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import styled from '../../styles/pages/ApprovalBoxSetPage.module.css';

const commonCellStyle = {
  width: '30%',
};

const commonDataStyle = {
  width: '70%',
};

function DetailBox() {
  const [menuOption, setMenuOption] = useState('전체');
  const [useStatus, setUseStatus] = useState('사용');

  const handleMenuOptionChange = (event) => {
    setMenuOption(event.target.value);
  };

  return (
    <div className={styled.formcontainer}>
      <div className={styled.inputItem}>
        <div style={commonCellStyle}>
          <div className={styled.text}>회사</div>
        </div>
        <div style={commonDataStyle}>
          <Datalist />
        </div>
      </div>
      <div className={styled.inputItem}>
        <div style={commonCellStyle}>
          <div className={styled.text}>명칭</div>
        </div>
        <div style={commonDataStyle}>
          <div>
            <input type="text" className={styled.inputstyle} />
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
            <Radiobtn labels={['사용', '미사용']} selectedOption={useStatus} />
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
            selectedOption={menuOption}
            onChange={handleMenuOptionChange}
          />
          {menuOption === '선택' && (
            <div className={styled.viewUseField}>
              <div className={styled.viewItemBox}></div>
              <PopUp
                title="메뉴 사용범위"
                width="1300px"
                height="600px"
                label={<AccountTreeRoundedIcon style={{ color: 'grey' }} />}
              />
            </div>
          )}
        </div>
      </div>
      <div className={styled.inputItem}>
        <div style={commonCellStyle}>
          <div className={styled.text}>명칭</div>
        </div>
        <div style={commonDataStyle}>
          <div>
            <input type="text" className={styled.inputstyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBox;
