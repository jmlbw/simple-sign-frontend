import { useEffect, useRef, useState } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
// import { columns, fields, rows } from '../../../assets/datas/form_sample_data';
import Title from '../../common/Title';
import '../../../styles/components/formManage/formList/FormList.css';
import 'realgrid/dist/realgrid-style.css'; // RealGrid CSS 추가

function FormList({ title, columns, fields, rows }) {
  const [provider, setProvider] = useState(null);
  const [gridView, setGridView] = useState(null);
  const realgridElement = useRef(null);

  useEffect(() => {
    const container = realgridElement.current;
    const dataProvider = new LocalDataProvider(true);
    const grid = new GridView(container);

    grid.setDataSource(dataProvider);

    dataProvider.setFields(fields);
    grid.setColumns(columns);
    dataProvider.setRows(rows);

    setProvider(dataProvider);
    setGridView(grid);

    return () => {
      if (provider) {
        provider.clearRows();
        provider.destroy();
      }
      if (grid) {
        grid.destroy();
      }
    };
  }, []);

  return (
    <>
      <Title text={title} font_size={'18px'}></Title>
      <div
        ref={realgridElement}
        style={{ height: '100%', width: '100%' }}
      ></div>
    </>
  );
}

export default FormList;
