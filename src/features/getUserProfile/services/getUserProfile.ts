import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { usersListActions } from '../../../../entities/UsersList/model/slice/usersListSlice';
import { UsersList } from '../../../../entities/UsersList/model/types/userSchema';

export interface RegistrationData {
  email: string;
  password: string;
}

export const getUserProfile = createAsyncThunk(
  'usersList/getUsersList',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get<UsersList>(
        `https://reqres.in/api/users/${id}`
        );
      if (!response.data) {
        throw new Error();
      }
      thunkAPI.dispatch(userProfileAction.setUserProfile(response.data.data));
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error: ' + e);
    }
  }
);
