import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getData, addTodo, deleteTodo, editTodo } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  currentTodo: null,
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
    clearCurrentTodo(state) {
      state.currentTodo = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => {
          return item.id === action.payload.id;
        });
        state.items.splice(index, 1);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => {
          return item.id === action.payload.id;
        });
        state.items.splice(index, 1, action.payload);
        state.currentTodo = null;
      })

      .addMatcher(
        isAnyOf(
          getData.pending,
          addTodo.pending,
          deleteTodo.pending,
          editTodo.pending,
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        },
      )

      .addMatcher(
        isAnyOf(
          getData.rejected,
          addTodo.rejected,
          deleteTodo.rejected,
          editTodo.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      )

      .addMatcher(
        isAnyOf(getData.fulfilled, addTodo.fulfilled, deleteTodo.fulfilled),
        state => {
          state.isLoading = false;
        },
      ),
});

export default todos.reducer;
export const { setCurrentTodo, clearCurrentTodo } = todos.actions;
