import React, { useEffect, useRef, useState } from 'react';
import { GridView, LocalDataProvider } from 'realgrid';
import Title from '../../common/Title';
import '../../../styles/components/formManage/formList/FormList.css';
import 'realgrid/dist/realgrid-style.css'; // RealGrid CSS 추가

function FormList({ title, columns, fields, rows }) {
  const [provider, setProvider] = useState(null);
  const [gridView, setGridView] = useState(null);
  const realgridElement = useRef(null);
  let container = null;
  let dataProvider = null;
  let grid = null;

  useEffect(() => {
    container = realgridElement.current;
    dataProvider = new LocalDataProvider(true);
    grid = new GridView(container);

    grid.setRowIndicator({
      visible: false,
    });
    grid.setStateBar({
      visible: false,
    });

    grid.displayOptions.fitStyle = 'even';
    grid.displayOptions.columnMovable = false;
    grid.displayOptions.selectionStyle = 'singleRow';
    grid.editOptions.editable = false;
    grid.editOptions.updatable = false;

    grid.setDataSource(dataProvider);

    dataProvider.setFields(fields);
    grid.setColumns(columns);
    dataProvider.setRows(rows);

    grid.onCellClicked = function (grid, clickData) {
      let jsonData = provider.getJsonRow(clickData.dataRow);
      console.log(jsonData);
    };

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
  }, [rows]);

  return (
    <>
      {title !== undefined ? (
        <Title text={title} font_size={'18px'}></Title>
      ) : null}
      <div
        ref={realgridElement}
        style={{ height: '100%', width: '100%' }}
      ></div>
    </>
  );
}

export default FormList;
