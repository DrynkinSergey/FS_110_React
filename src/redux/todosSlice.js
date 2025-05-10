import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: '',
};

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const item = state.todos.find(item => item.id === action.payload);
      item.isCompleted = !item.isCompleted;
    },
    editTodo: (state, action) => {
      const item = state.todos.find(item => item.id === action.payload.id);
      item.todo = action.payload.todo;
    },
    toggleFavorite: (state, action) => {
      const item = state.todos.find(item => item.id === action.payload);
      item.isFavorite = !item.isFavorite;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const todosReducer = slice.reducer;
export const { deleteTodo, addTodo, changeFilter, editTodo, toggleFavorite, toggleTodo } = slice.actions;

export const selectTodos = state => state.todos.todos;
export const selectFilter = state => state.todos.filter;
