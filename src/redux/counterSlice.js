import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  step: 1,
};

// slice
const slice = createSlice({
  name: 'counter',
  initialState,
  selectors: {
    selectCounter: state => state.counter,
    selectStep: state => state.step,
  },
  reducers: {
    increment: (state, action) => {
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: (state, action) => initialState,
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement, reset, changeStep } = slice.actions;
export const { selectCounter, selectStep } = slice.selectors;

// selectors

// export const selectCounter = state => state.counter.counter;
// export const selectStep = state => state.counter.step;
