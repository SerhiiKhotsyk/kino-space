import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { myAxios } from '../../myAxios';

export const fetchTopRatingFilms = createAsyncThunk(
  'topRatingFilms/fetchTopRatingFilms',
  async () => {
    const { data } = await myAxios.get('movie/top_rated');
    return data;
  },
);

export const fetchMoreTopRatingFilms = createAsyncThunk(
  'topRatingFilms/fetchMoreTopRatingFilms',
  async (page = 1) => {
    const { data } = await myAxios.get(`movie/top_rated?page=${page}`);
    return data;
  },
);

const initialState = {
  films: [],
  page: 0,
  totalPages: 0,
  status: 'initial',
};

const topRatingFilmsSlice = createSlice({
  name: 'topRatingFilms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all films
    builder.addCase(fetchTopRatingFilms.pending, (state) => {
      state.films = [];
      state.status = 'loading';
    });
    builder.addCase(fetchTopRatingFilms.fulfilled, (state, action) => {
      state.films = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchTopRatingFilms.rejected, (state) => {
      state.films = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });

    // get more films
    builder.addCase(fetchMoreTopRatingFilms.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMoreTopRatingFilms.fulfilled, (state, action) => {
      state.films = [...state.films, ...action.payload.results];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchMoreTopRatingFilms.rejected, (state) => {
      state.films = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });
  },
});

export const topRatingFilmsReducer = topRatingFilmsSlice.reducer;
