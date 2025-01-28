import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://task-manager-api.goit.global';

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
