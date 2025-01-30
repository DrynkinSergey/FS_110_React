import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const goitApi = axios.create({
  baseURL: 'https://task-manager-api.goit.global',
});

export const setAuthHeader = token => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerThunk = createAsyncThunk('auth/register', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post('users/signup', credentials);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    console.log(error);

    if (error.response.data.code === 11000) {
      toast.error('User already exist!');
      return thunkApi.rejectWithValue(error.message);
    }
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
  try {
    const { data } = await goitApi.post('users/login', credentials);
    setAuthHeader(data.token);

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const { data } = await goitApi.post('users/logout');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUserThunk = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (savedToken === null) {
    return thunkApi.rejectWithValue('token is not exist');
  }
  setAuthHeader(savedToken);

  try {
    const { data } = await goitApi.get('users/me');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
