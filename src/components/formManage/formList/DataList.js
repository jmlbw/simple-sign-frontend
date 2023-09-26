import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useFormManage } from '../../../contexts/FormManageContext';

export default function DataList({ columns, rows, dataHandler }) {
  const { updateDetailData } = useFormManage();

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        onRowClick={(event) => {
          dataHandler(event.row);
          updateDetailData();
        }}
      />
    </div>
  );
}
