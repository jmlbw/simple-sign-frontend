import styled from '../../../../styles/components/formManage/formDetail/components/DetailTableItems.module.css';
import DragDrop from './DragDrop';
import React from 'react';
import PopUp from '../../../common/PopUp';
import FormEdit from '../../formEditPopUp/FormEdit';
import { FiEdit } from 'react-icons/fi';
import PopUpFoot from '../../../common/PopUpFoot';
import Optionbox from '../../../common/Optionbox';

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
  return <div className={styled.titleBox}>{title}</div>;
};

const InputBox = ({ id, data, dataHandler }) => {
  return (
    <div className={styled.contentBox}>
      <input
        type="text"
        value={data}
        style={{ width: '90%' }}
        onChange={(e) => {
          dataHandler(id, e.target.value);
        }}
      />
    </div>
  );
};

const AreaBox = ({ id, data, dataHandler }) => {
  return (
    <div className={`${styled.contentBox} ${styled.areaContent}`}>
      <div className={styled.areaContentBox}>
        {data.length > 0
          ? data.map((ele) => {
              return (
                <Optionbox
                  id={id}
                  category={ele.category}
                  name={ele.name}
                  useId={ele.useId}
                  dataHandler={dataHandler}
                ></Optionbox>
              );
            })
          : null}
      </div>
    </div>
  );
};

const FileBox = ({ id, name, data, dataHandler }) => {
  return (
    <div className={styled.contentBox}>
      <div className={styled.fileContent}>
        <DragDrop name={name} id={id} data={data} dataHandler={dataHandler} />
        <div className={styled.subBox}>
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
      </div>
    </div>
  );
};

const RadioBox = ({ id, buttons, data, dataHandler }) => {
  return (
    <div className={styled.contentBox}>
      <div className={styled.radioBox}>
        <input
          type="radio"
          name="radio"
          value={buttons[0].value}
          checked={data === 1}
          onChange={(e) => {
            dataHandler(id, e.target.value === 'true' ? 1 : 0);
          }}
        />
        <div>{buttons[0].name}</div>
        <input
          type="radio"
          name="radio"
          value={buttons[1].value}
          checked={data === 0}
          onChange={(e) => {
            dataHandler(id, e.target.value === 'false' ? 0 : 1);
          }}
        />
        <div>{buttons[1].name}</div>
      </div>
    </div>
  );
};

export { DetailBox, TitleBox, InputBox, FileBox, AreaBox, RadioBox };
