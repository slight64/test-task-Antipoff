import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData, UsersListSchema } from '../types/userSchema';

const initialState: UsersListSchema = {};

export const usersListSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    setUsersList: (state, action: PayloadAction<UserData[]>) => {
      state.usersList = action.payload;
    },
  },
});

export const { actions: usersListActions } = usersListSlice;
export const { reducer: usersListReducer } = usersListSlice;

export default usersListSlice.reducer;
