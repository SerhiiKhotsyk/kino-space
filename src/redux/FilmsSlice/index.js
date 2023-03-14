import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { myAxios } from '../../myAxios';

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (page = 1) => {
  const { data } = await myAxios.get(`/discover/movie?page=${page}`);
  return data;
});

const initialState = {
  filmsData: [],
  page: 0,
  totalPages: 0,
  status: 'initial',
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.filmsData = [...state.filmsData, ...action.payload.results];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchFilms.rejected, (state, action) => {
      state.filmsData = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });
  },
});

export const filmsReducer = filmsSlice.reducer;
