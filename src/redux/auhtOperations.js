import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
