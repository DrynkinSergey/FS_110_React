import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = slice.reducer;
export const { logout } = slice.actions;
