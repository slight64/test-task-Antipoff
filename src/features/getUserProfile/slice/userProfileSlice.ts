import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/userProfileSchema';
import { getUserProfile } from '../services/getUserProfile';

const initialState: AuthSchema = {

};

export const userProfile = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<string>) => {
      state.userProfile = action.payload;
    },
    // setEmail: (state, action: PayloadAction<string>) => {
    //   state.email = action.payload;
    // },
    // setPassword: (state, action: PayloadAction<string>) => {
    //   state.password = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getUserProfile.rejected, (state, action: AnyAction) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: userProfileAction } = userProfile;
export const { reducer: userProfileReducer } = userProfile;

export default userProfile.reducer;
