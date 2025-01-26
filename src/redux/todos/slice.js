import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getData, addTodo, deleteTodo } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
  },
  extraReducers: builder =>
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex((item) => {
         return item.id === action.payload.id
        })
        state.items.splice(index, 1)
      })


      .addMatcher(isAnyOf(getData.pending, addTodo.pending, deleteTodo.pending), state => {
        state.isLoading = true;
        state.error = null;
      })

      .addMatcher(isAnyOf(getData.rejected, addTodo.rejected, deleteTodo.rejected), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addMatcher(isAnyOf(getData.fulfilled, addTodo.fulfilled, deleteTodo.fulfilled), state => {
        state.isLoading = false;
      })
});

export default todos.reducer;
