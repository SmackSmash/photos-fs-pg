import { createSlice } from '@reduxjs/toolkit';
import { type User } from '@/types';

type UsersState = {
  isLoading: boolean;
  error: null | string;
  data: User[];
};

const initialState: UsersState = {
  isLoading: false,
  error: null,
  data: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
