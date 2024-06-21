import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersListActions } from '../../../../entities/UsersList/model/slice/usersListSlice';
import { UsersList } from '../../../../entities/UsersList/model/types/userSchema';

export interface RegistrationData {
  email: string;
  password: string;
}

export const getUsersListData = createAsyncThunk(
  'usersList/getUsersList',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<UsersList>(
        'https://reqres.in/api/users?page=2'
      );
      if (!response.data) {
        throw new Error();
      }
      thunkAPI.dispatch(usersListActions.setUsersList(response.data.data));
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error: ' + e);
    }
  }
);
