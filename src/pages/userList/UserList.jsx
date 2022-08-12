import { DataGrid } from '@mui/x-data-grid';

import './userList.css';

const UserList = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'username', headerName: 'Username', width: 170 },
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
  ];

  const rows = [
    {
      id: 1,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 2,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 3,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 4,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 5,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 6,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 7,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 8,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 9,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 10,
      username: 'Jon Snow',
      avatar:
        'https://images.pexels.com/photos/9051796/pexels-photo-9051796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      email: 'jon@gmail.com',
      status: 'active',
      transaction: '$120.00',
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
