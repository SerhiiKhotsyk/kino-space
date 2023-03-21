import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { myAxios } from '../../myAxios';

export const fetchTopViewsFilms = createAsyncThunk('topViewsFilms/fetchTopViewsFilms', async () => {
  const { data } = await myAxios.get('movie/popular');
  return data;
});

export const fetchMoreTopViewsFilms = createAsyncThunk(
  'topViewsFilms/fetchMoreTopViewsFilms',
  async (page = 1) => {
    const { data } = await myAxios.get(`movie/popular?page=${page}`);
    return data;
  },
);

const initialState = {
  films: [],
  page: 0,
  totalPages: 0,
  status: 'initial',
};

const topViewsFilmsSlice = createSlice({
  name: 'topViewsFilms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all films
    builder.addCase(fetchTopViewsFilms.pending, (state) => {
      state.films = [];
      state.status = 'loading';
    });
    builder.addCase(fetchTopViewsFilms.fulfilled, (state, action) => {
      state.films = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchTopViewsFilms.rejected, (state) => {
      state.films = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });

    // get more films
    builder.addCase(fetchMoreTopViewsFilms.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMoreTopViewsFilms.fulfilled, (state, action) => {
      state.films = [...state.films, ...action.payload.results];
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
      state.status = 'done';
    });
    builder.addCase(fetchMoreTopViewsFilms.rejected, (state) => {
      state.films = [];
      state.page = 0;
      state.totalPages = 0;
      state.status = 'error';
    });
  },
});

export const topViewsFilmsReducer = topViewsFilmsSlice.reducer;
