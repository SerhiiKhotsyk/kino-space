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

export const fetchTopViewsFilms = createAsyncThunk('films/fetchTopViewsFilms', async () => {
  const { data } = await myAxios.get('movie/popular');
  return data;
});

export const fetchTopRatingFilms = createAsyncThunk('films/fetchTopRatingFilms', async () => {
  const { data } = await myAxios.get('movie/top_rated');
  return data;
});

export const fetchUpcomingFilms = createAsyncThunk('films/fetchUpcomingFilms', async () => {
  const { data } = await myAxios.get('movie/upcoming');
  return data;
});

export const fetchMovieDetails = createAsyncThunk('films/fetchMovieDetails', async (id) => {
  const { data } = await myAxios.get(`/movie/${id}`);
  return data;
});

const initialState = {
  filmsData: [],
  popularFilms: [],
  topRatingFilms: [],
  upcomingFims: [],
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
      state.filmsData = [];
      state.status = 'loading';
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.filmsData = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchFilms.rejected, (state) => {
      state.filmsData = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });

    // get more films
    builder.addCase(fetchMoreFilms.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMoreFilms.fulfilled, (state, action) => {
      state.filmsData = [...state.filmsData, ...action.payload.results];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchMoreFilms.rejected, (state) => {
      state.filmsData = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });

    // get most popular films
    builder.addCase(fetchTopViewsFilms.pending, (state) => {
      state.status = 'loading';
      state.popularFilms = [];
    });
    builder.addCase(fetchTopViewsFilms.fulfilled, (state, action) => {
      state.popularFilms = action.payload.results;
      state.status = 'done';
    });
    builder.addCase(fetchTopViewsFilms.rejected, (state) => {
      state.popularFilms = [];
      state.status = 'error';
    });

    // get top ratings films
    builder.addCase(fetchTopRatingFilms.pending, (state) => {
      state.status = 'loading';
      state.topRatingFilms = [];
    });
    builder.addCase(fetchTopRatingFilms.fulfilled, (state, action) => {
      state.topRatingFilms = action.payload.results;
      state.status = 'done';
    });
    builder.addCase(fetchTopRatingFilms.rejected, (state) => {
      state.topRatingFilms = [];
      state.status = 'error';
    });

    // get upcoming films
    builder.addCase(fetchUpcomingFilms.pending, (state) => {
      state.status = 'loading';
      state.upcomingFims = [];
    });
    builder.addCase(fetchUpcomingFilms.fulfilled, (state, action) => {
      state.upcomingFims = action.payload.results;
      state.status = 'done';
    });
    builder.addCase(fetchUpcomingFilms.rejected, (state) => {
      state.upcomingFims = [];
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
