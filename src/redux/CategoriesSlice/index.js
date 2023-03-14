import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { myAxios } from '../../myAxios';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const { data } = await myAxios.get(`genre/movie/list`);
  return data;
});

const initialState = {
  genres: [],
  status: 'initial',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.genres = [];
      state.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.genres = action.payload.genres;
      state.status = 'done';
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.genres = [];
      state.status = 'error';
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
