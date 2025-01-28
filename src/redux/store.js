import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todosSlice';
import { authReducer } from './authSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReducer,
  },
});
