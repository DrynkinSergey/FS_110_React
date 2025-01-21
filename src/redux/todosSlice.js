import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTodoThunk, deleteTodo, editTodoThunk, fetchData } from './operations';

const initialState = {
  todos: [],
  filter: '',
  isLoading: false,
  isError: false,
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

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    fetchDataSuccess: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })

      .addMatcher(isAnyOf(addTodoThunk.pending, editTodoThunk.pending, deleteTodo.pending, fetchData.pending), (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })

      .addMatcher(isAnyOf(addTodoThunk.rejected, editTodoThunk.rejected, deleteTodo.rejected, fetchData.rejected), (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });

    // .addCase(deleteTodo.fulfilled, (state, action) => {
    //   state.todos = state.todos.filter(item => item.id !== action.payload.id);
    // })
    // .addCase(addTodoThunk.fulfilled, (state, action) => {
    //   state.todos.push(action.payload);
    // })
    // .addCase(editTodoThunk.fulfilled, (state, action) => {
    //   const item = state.todos.find(item => item.id === action.payload.id);
    //   item.todo = action.payload.todo;
    // });
  },
});

export const todosReducer = slice.reducer;
export const { addTodo, changeFilter, editTodo, toggleFavorite, toggleTodo, setLoading, setError, fetchDataSuccess } = slice.actions;

export const selectTodos = state => state.todos.todos;
export const selectFilter = state => state.todos.filter;
export const selectIsLoading = state => state.todos.isLoading;
export const selectIsError = state => state.todos.isError;
