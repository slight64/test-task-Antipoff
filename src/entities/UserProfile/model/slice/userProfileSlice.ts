import { UserProfile } from './../types/UserProfileSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfileSchema } from '../types/UserProfileSchema';

const initialState: UserProfileSchema = {};

export const userProfileSlice = createSlice({
  name: 'usersList',
  initialState,
  reducers: {
    setUsersList: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
  },
});

export const { actions: userProfileSliceActions } = userProfileSlice;
export const { reducer: userProfileSliceReducer } = userProfileSlice;

export default userProfileSlice.reducer;
