import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
