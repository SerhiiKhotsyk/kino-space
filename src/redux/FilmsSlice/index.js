import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { myAxios } from '../../myAxios';

export const fetchFilms = createAsyncThunk('films/fetchFilms', async (page = 1) => {
  const { data } = await myAxios.get(`/discover/movie?page=${page}`);
  return data;
});

export const fetchMoreFilms = createAsyncThunk('films/fetchMoreFilms', async (page = 1) => {
  const { data } = await myAxios.get(`/discover/movie?page=${page}`);
  return data;
});

export const fetchMovieDetails = createAsyncThunk('films/fetchMovieDetails', async (id) => {
  const { data } = await myAxios.get(`/movie/${id}`);
  return data;
});

const initialState = {
  films: [],
  movieDetails: {},
  page: 0,
  totalPages: 0,
  status: 'initial',
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all films
    builder.addCase(fetchFilms.pending, (state) => {
      state.films = [];
      state.status = 'loading';
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchFilms.rejected, (state) => {
      state.films = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });

    // get more films
    builder.addCase(fetchMoreFilms.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMoreFilms.fulfilled, (state, action) => {
      state.films = [...state.films, ...action.payload.results];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchMoreFilms.rejected, (state) => {
      state.films = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });

    // get movie detailes
    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.status = 'loading';
      state.movieDetails = {};
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
      state.status = 'done';
    });
    builder.addCase(fetchMovieDetails.rejected, (state) => {
      state.movieDetails = {};
      state.status = 'error';
    });
  },
});

export const filmsReducer = filmsSlice.reducer;
