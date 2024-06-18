import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/authSchema';
import { registrationAndLogin } from '../services/getUsersListService';

const initialState: AuthSchema = {
  isLoading: false,
  username: '',
  email: '',
  password: '',
  error: '',
};

export const loginSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    // setUsername: (state, action: PayloadAction<string>) => {
    //   state.username = action.payload;
    // },
    // setEmail: (state, action: PayloadAction<string>) => {
    //   state.email = action.payload;
    // },
    // setPassword: (state, action: PayloadAction<string>) => {
    //   state.password = action.payload;
    // },
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
      .addCase(registrationAndLogin.rejected, (state, action: AnyAction) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: registrAndloginActions } = loginSlice;
export const { reducer: registrAndloginReducer } = loginSlice;

export default loginSlice.reducer;
