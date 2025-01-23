import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todosSlice';
import { authReducer } from './authSlice';
import { articlesReducer } from './articlesSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReducer,
    articles: articlesReducer,
  },
});
