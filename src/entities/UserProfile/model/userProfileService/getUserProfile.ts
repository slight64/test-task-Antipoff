import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserData } from '../types/UserProfileSchema';
import { userProfileSliceActions } from '../slice/userProfileSlice';

export const getUserProfile = createAsyncThunk(
  'userProfile/getUserProfile',
  async (id: number, thunkAPI) => {
    console.log('id:', id);
    try {
      const response = await axios.get<UserData>(
        `https://reqres.in/api/users/${id}`
      );
      if (!response.data) {
        throw new Error();
      }
      thunkAPI.dispatch(
        userProfileSliceActions.setUserProfile(response.data.data)
      );
      console.log('response ', response.data.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error: ' + e);
    }
  }
);
