import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from './auhtOperations';

axios.defaults.baseURL = 'https://678fdd0f49875e5a1a93a664.mockapi.io';

// export const fetchData = () => async dispatch => {
//   try {
//     dispatch(setError(false));
//     dispatch(setLoading(true));
//     const { data } = await axios.get('/todos');
//     dispatch(fetchDataSuccess(data));
//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setError(true));
//   }
// };

export const fetchData = createAsyncThunk('todos/fetchAllTodos', async (_, thunkAPI) => {
  try {
    const { data } = await goitApi.get('/tasks');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id, thunkAPI) => {
  try {
    await goitApi.delete(`/todos/${id}`);
    thunkAPI.dispatch(fetchData());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('todos/addTodo', async (body, thunkAPI) => {
  try {
    await goitApi.post('tasks', body);
    thunkAPI.dispatch(fetchData());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editTodoThunk = createAsyncThunk('todos/editTodo', async (body, thunkAPI) => {
  try {
    await goitApi.patch(`tasks/${body.id}`, body);
    thunkAPI.dispatch(fetchData());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleTodo = createAsyncThunk('todos/toggle', async (body, thunkAPI) => {
  try {
    await goitApi.patch(`tasks/${body.id}`, body);
    thunkAPI.dispatch(fetchData());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
