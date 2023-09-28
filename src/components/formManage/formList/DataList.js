import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useFormManage } from '../../../contexts/FormManageContext';

export default function DataList({ columns, rows, dataHandler }) {
  const { updateDetailData } = useFormManage();

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        autoHeight
        autoWidth
        rows={rows}
        columns={columns}
        hideFooter
        onRowClick={(event) => {
          dataHandler(event.row);
          updateDetailData();
        }}
      />
    </div>
  );
}
