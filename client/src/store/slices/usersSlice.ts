import { createSlice } from '@reduxjs/toolkit';

type UsersState = string[];
const initialState: UsersState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
