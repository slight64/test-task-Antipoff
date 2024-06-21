import { UserProfile, UserProfileSchema } from './../types/UserProfileSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserProfileSchema = {
  userProfile: {
    avatar: '',
    email: '',
    first_name: '',
    id: undefined,
    last_name: '',
  },

  isLoading: false,
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.userProfile = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder;
  //   // .addCase(getUserProfile.pending, (state) => {
  //   //   state.error = '';
  //   //   state.isLoading = true;
  //   // })
  //   // .addCase(getUserProfile.fulfilled, (state) => {
  //   //   state.isLoading = false;
  //   // })
  //   // .addCase(getUserProfile.rejected, (state) => {
  //   //   state.isLoading = false;
  //   // });
  // },
});

export const { actions: userProfileSliceActions } = userProfileSlice;
export const { reducer: userProfileSliceReducer } = userProfileSlice;

export default userProfileSlice.reducer;
