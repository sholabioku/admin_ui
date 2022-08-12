import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from '../../dummyData';

import './userList.css';

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 170,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img
              src={params.row.avatar}
              alt={params.row.user}
              className='userListImg'
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 170,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 170,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className='userListEdit'>Edit</button>
            <DeleteOutline className='userListDelete' />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
