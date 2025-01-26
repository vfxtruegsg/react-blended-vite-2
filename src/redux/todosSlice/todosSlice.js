import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getData } from '../operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })

      .addMatcher(isAnyOf(getData.pending), state => {
        state.isLoading = true;
        state.error = null;
      })

      .addMatcher(isAnyOf(getData.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export default todos.reducer;
