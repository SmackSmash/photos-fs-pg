import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await fetch('http://localhost:3000/users');
  const data = await response.json();
  console.log(data);
  return data;
});

export default fetchUsers;
