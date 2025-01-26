import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637785ab81a568fc2518138f.mockapi.io/api';

export const getData = createAsyncThunk(
  'todos/getData',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post('/todos', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/todos/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async ({ id, ...body }, thunkAPI) => {
    try {
      const { data } = await axios.put(`/todos/${id}`, body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
