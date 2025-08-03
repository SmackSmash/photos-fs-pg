import { createSlice, type SerializedError } from '@reduxjs/toolkit';
import { addUser, fetchUsers } from '@/store';
import { type User } from '@/types';

type UsersState = {
  isLoading: boolean;
  error: null | SerializedError;
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
  reducers: {},
  extraReducers: builder => {
    // Fetch users
    builder.addCase(fetchUsers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Add user
    builder.addCase(addUser.pending, () => {});
    builder.addCase(addUser.rejected, () => {});
    builder.addCase(addUser.fulfilled, () => {});
  }
});

export default usersSlice.reducer;
