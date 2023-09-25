import styled from '../../../../styles/components/formManage/formDetail/components/DetailTable.module.css';
import DragDrop from './DragDrop';
import React from 'react';

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
        checked={data === true}
        onChange={(e) => {
          dataHandler(id, e.target.value === 'true' ? true : false);
        }}
      />
      {buttons[0].name}
      <input
        type="radio"
        name="radio"
        value={buttons[1].value}
        checked={data === false}
        onChange={(e) => {
          dataHandler(id, e.target.value === 'true' ? true : false);
        }}
      />
      {buttons[1].name}
    </div>
  );
};

export { DetailBox, TitleBox, InputBox, FileBox, AreaBox, RadioBox };
