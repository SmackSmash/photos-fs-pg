import { createSlice } from '@reduxjs/toolkit';
import { type User } from '@/types';

type UsersState = {
  data: User[];
};

const initialState: UsersState = {
  data: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
