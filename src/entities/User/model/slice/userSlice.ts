import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';
import { USER_AUTH_LOCALSTORAGE } from '../../../../shared/const/localStorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    getAuthDataFromLocalstorage: (state) => {
      const user = localStorage.getItem(USER_AUTH_LOCALSTORAGE);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_AUTH_LOCALSTORAGE);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
