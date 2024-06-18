import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';
import { USER_AUTH_LOCALSTORAGE } from '../../../../shared/const/localStorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },
    getAuthDataFromLocalstorage: (state) => {
      const token = localStorage.getItem(USER_AUTH_LOCALSTORAGE);

      if (token) {
        state.userData = JSON.parse(token);
      }
    },
    logout: (state) => {
      state.userData = undefined;
      localStorage.removeItem(USER_AUTH_LOCALSTORAGE);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
