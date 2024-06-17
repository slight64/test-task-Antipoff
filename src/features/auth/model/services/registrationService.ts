import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_AUTH_LOCALSTORAGE } from '../../../../shared/const/localStorage';
import { User } from '../../../../entities/User/model/types/userSchema';
import { userActions } from '../../../../entities/User';

interface RegistrationData {
  username: string;
  password: string;
}

export const registrationAndLogin = createAsyncThunk<
  User,
  RegistrationData,
  { rejectValue: string }
>('login/registration', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(
      'https://reqres.in/api/register',
      authData
    );
    if (!response.data) {
      throw new Error();
    }
    localStorage.setItem(USER_AUTH_LOCALSTORAGE, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Неверный пароль или имя пользователя');
  }
});
