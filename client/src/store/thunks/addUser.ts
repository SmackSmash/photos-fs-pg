import type { User } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '@/store';

export const addUser = createAsyncThunk('users/add', async (user: User, { dispatch }) => {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  dispatch(fetchUsers());
  return data;
});
