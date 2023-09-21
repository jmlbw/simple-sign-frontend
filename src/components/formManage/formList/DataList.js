import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataList({ columns, rows, dataHandler }) {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick={(event) => {
          dataHandler(event.row);
        }}
      />
    </div>
  );
}
