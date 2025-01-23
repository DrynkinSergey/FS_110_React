import { createSlice } from '@reduxjs/toolkit';
import { fetchAllArticles } from './articlesOperations';

const initialState = {
  items: [],
};

const slice = createSlice({
  name: 'articles',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchAllArticles.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const articlesReducer = slice.reducer;
