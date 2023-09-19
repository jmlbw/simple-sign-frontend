import styled from '../../../../styles/components/formManage/searchBox/components/SearchItem.module.css';

export default function SearchItem({ asset1, asset2, data }) {
  const InputComp = ({ type }) => {
    return (
      <div className={styled.inputBox}>
        <input className={styled.input} type={type} />
      </div>
    );
  };

  const SelectComp = ({ width = 170 }) => {
    return (
      <select className={styled.select} style={{ width: `${width}px` }}>
        {data.length !== 0
          ? data.map((ele, index) => {
              return (
                <option key={index} value={ele.name}>
                  {ele.name}
                </option>
              );
            })
          : null}
      </select>
    );
  };

  const assetRender = (asset) => {
    if (asset === 'select') {
      return <SelectComp />;
    } else if (asset === 'text') {
      return <InputComp type={'text'} />;
    } else if (asset === 'date') {
      return <InputComp type={'date'} />;
    } else {
      return <p className={styled.title}>{asset}</p>;
    }
  };

  return (
    <div className={styled.itemBox}>
      {assetRender(asset1)}
      {assetRender(asset2)}
    </div>
  );
}
