import styled from '../../../../styles/components/formManage/formDetail/components/DetailTable.module.css';
import DragDrop from './DragDrop';

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

const InputBox = ({ data, dataHandler }) => {
  return (
    <div style={{ width: '100%', height: '20px' }}>
      <input
        type="text"
        value={data}
        onChange={(e) => {
          dataHandler(e.target.value);
        }}
      />
    </div>
  );
};

const AreaBox = ({ id, title, data, children }) => {
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

const FileBox = ({ name, data, dataHandler }) => {
  return (
    <div>
      <DragDrop name={name} data={data} dataHandler={dataHandler} />
    </div>
  );
};

const RadioBox = ({ buttons, data, dataHandler }) => {
  return (
    <div>
      <input
        type="radio"
        name="radio"
        value={buttons[0].value}
        checked={data === true}
        onChange={(e) => {
          dataHandler(e.target.value);
        }}
      />
      {buttons[0].name}
      <input
        type="radio"
        name="radio"
        value={buttons[1].value}
        checked={data === false}
        onChange={(e) => {
          dataHandler(e.target.value);
        }}
      />
      {buttons[1].name}
    </div>
  );
};

export { DetailBox, TitleBox, InputBox, FileBox, AreaBox, RadioBox };
