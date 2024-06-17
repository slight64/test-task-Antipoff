import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/authSchema';
import { registrationAndLogin } from '../services/registrationService';

const initialState: AuthSchema = {
  isLoading: false,
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationAndLogin.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registrationAndLogin.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registrationAndLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: registrAndloginActions } = loginSlice;
export const { reducer: registrAndloginReducer } = loginSlice;

export default loginSlice.reducer;
