import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('https://cute-todo-api-rwtq.onrender.com/api/auth/register', credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('https://cute-todo-api-rwtq.onrender.com/api/auth/login', credentials);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
