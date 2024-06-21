import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { UserData } from '../types/UserProfileSchema';
import { userProfileSliceActions } from '../slice/userProfileSlice';

export const getUserProfile = createAsyncThunk(
  'userProfile/getUserProfile',
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<UserData>(
        `https://reqres.in/api/users/${id}`
      );
      if (!response.data.data) {
        throw new Error();
      }
      if (response.data.data)
        thunkAPI.dispatch(
          userProfileSliceActions.setUserProfile(response.data.data)
        );
      return response.data.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return thunkAPI.rejectWithValue('Error: ' + e);
      }
    }
  }
);
