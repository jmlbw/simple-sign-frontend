import styled from '../../../../styles/components/formManage/formDetail/components/DetailTable.module.css';
import DragDrop from './DragDrop';
import React from 'react';
import PopUp from '../../../common/PopUp';
import FormEdit from '../../formEditPopUp/FormEdit';
import { FiEdit } from 'react-icons/fi';
import PopUpFoot from '../../../common/PopUpFoot';

const grayAndBlueBtn = [
  {
    label: '미리보기',
    onClick: () => {},
    btnStyle: 'popup_gray_btn',
  },
  {
    label: '반영',
    onClick: () => {},
    btnStyle: 'popup_blue_btn',
  },
];

const DetailBox = ({ children }) => {
  return (
    <div className={styled.detailBox} style={{ width: '100%' }}>
      {children}
    </div>
  );
};

const TitleBox = ({ title }) => {
  return <div>{title}</div>;
};

const InputBox = ({ id, data, dataHandler }) => {
  return (
    <div style={{ width: '100%', height: '20px' }}>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          dataHandler(id, e.target.value);
        }}
      />
    </div>
  );
};

const AreaBox = ({ id, data, children }) => {
  return (
    <div style={{ width: '100%', height: '40px' }}>
      {data.length > 0
        ? data.map((ele) => {
            return (
              <div>
                {ele.category} {ele.name}
              </div>
            );
          })
        : null}
    </div>
  );
};

const FileBox = ({ id, name, data, dataHandler }) => {
  return (
    <div>
      <DragDrop name={name} id={id} data={data} dataHandler={dataHandler} />
      <PopUp
        label={<FiEdit />}
        width={'1200px'}
        height={'700px'}
        title={'양식파일편집'}
        children={
          <>
            <div className={styled.contentContainer}>
              <div>
                <FormEdit data={data} />
              </div>
            </div>
            <PopUpFoot buttons={grayAndBlueBtn} />
          </>
        }
      />
    </div>
  );
};

const RadioBox = ({ id, buttons, data, dataHandler }) => {
  return (
    <div>
      <input
        type="radio"
        name="radio"
        value={buttons[0].value}
        checked={data === 1}
        onChange={(e) => {
          dataHandler(id, e.target.value === '1' ? 1 : 0);
        }}
      />
      {buttons[0].name}
      <input
        type="radio"
        name="radio"
        value={buttons[1].value}
        checked={data === 0}
        onChange={(e) => {
          dataHandler(id, e.target.value === '0' ? 1 : 0);
        }}
      />
      {buttons[1].name}
    </div>
  );
};

export { DetailBox, TitleBox, InputBox, FileBox, AreaBox, RadioBox };
