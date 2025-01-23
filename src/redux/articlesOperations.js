import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllArticles = createAsyncThunk('articles/fetchAllArticles', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('https://678fdd0f49875e5a1a93a664.mockapi.io/articles');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteArticle = createAsyncThunk('articles/deleteArticle', async (id, thunkAPI) => {
  try {
    await axios.delete(`https://678fdd0f49875e5a1a93a664.mockapi.io/articles/${id}`);
    thunkAPI.dispatch(fetchAllArticles());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addArticleThunk = createAsyncThunk('articles/addArticle', async (body, thunkAPI) => {
  try {
    await axios.post('https://678fdd0f49875e5a1a93a664.mockapi.io/articles', body);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchArticleById = createAsyncThunk('articles/fetchArticleById', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`https://678fdd0f49875e5a1a93a664.mockapi.io/articles/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
