import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { myAxios } from '../../myAxios';

export const fetchUpcomingFilms = createAsyncThunk('upcomingFilms/fetchUpcomingFilms', async () => {
  const { data } = await myAxios.get('movie/upcoming');
  return data;
});

export const fetchMoreUpcomingFilms = createAsyncThunk(
  'upcomingFilms/fetchMoreUpcomingFilms',
  async (page = 1) => {
    const { data } = await myAxios.get(`movie/upcoming?page=${page}`);
    return data;
  },
);

const initialState = {
  films: [],
  page: 0,
  totalPages: 0,
  status: 'initial',
};

const upcomingFilmsSlice = createSlice({
  name: 'upcomingFilms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all films
    builder.addCase(fetchUpcomingFilms.pending, (state) => {
      state.films = [];
      state.status = 'loading';
    });
    builder.addCase(fetchUpcomingFilms.fulfilled, (state, action) => {
      state.films = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchUpcomingFilms.rejected, (state) => {
      state.films = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });

    // get more films
    builder.addCase(fetchMoreUpcomingFilms.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMoreUpcomingFilms.fulfilled, (state, action) => {
      state.films = [...state.films, ...action.payload.results];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchMoreUpcomingFilms.rejected, (state) => {
      state.films = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });
  },
});

export const upcomingFilmsReducer = upcomingFilmsSlice.reducer;
