import { User } from './../../../../entities/User/model/types/userSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_AUTH_LOCALSTORAGE } from '../../../../shared/const/localStorage';

import { userActions } from '../../../../entities/User';

export interface RegistrationData {
  email: string;
  password: string;
}

export const registrationAndLogin = createAsyncThunk<User, RegistrationData>(
  'login/registration',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post<User>(
        'https://reqres.in/api/register',
        userData
      );
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(
        USER_AUTH_LOCALSTORAGE,
        JSON.stringify(response.data)
      );
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error: ' + e);
    }
  }
);
