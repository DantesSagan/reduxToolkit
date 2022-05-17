import axios from 'axios';
import pkg from '@reduxjs/toolkit';

const { createSlice, createAsyncThunk } = pkg;

const initialState = {
  loading: false,
  users: [],
  error: '',
};

// Generates pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((resposnse) => resposnse.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    // pending - wait for incoming request
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    // fulfilled - when request succeed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    });
    // rejected - when request have an a error, when request failed
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
export { fetchUsers };
