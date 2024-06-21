import { UserProfile, UserProfileSchema } from './../types/UserProfileSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserProfile } from '../userProfileService/getUserProfile';

const initialState: UserProfileSchema = {
  userProfile: {
    avatar: '',
    email: '',
    first_name: '',
    id: undefined,
    isLoading: false,
    last_name: '',
    error: '',
  },
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.userProfile.error = '';
        state.userProfile.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state) => {
        state.userProfile.isLoading = false;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.userProfile.isLoading = false;
        state.userProfile.error = action.payload;
      });
  },
});

export const { actions: userProfileSliceActions } = userProfileSlice;
export const { reducer: userProfileSliceReducer } = userProfileSlice;

export default userProfileSlice.reducer;
