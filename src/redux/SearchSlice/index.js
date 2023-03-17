import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { myAxios } from '../../myAxios';

export const getSearchedMovie = createAsyncThunk('search/getSearchedMovie', async (query) => {
  const { data } = await myAxios.get(`/search/movie?query=${query}`);
  return data;
});

const initialState = {
  searchValue: '',
  searchedFilms: [],
  status: 'initial',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchedMovie.pending, (state) => {
      state.status = 'loaading';
      state.searchedFilms = [];
    });
    builder.addCase(getSearchedMovie.fulfilled, (state, action) => {
      state.status = 'done';
      state.searchedFilms = action.payload.results;
    });
    builder.addCase(getSearchedMovie.rejected, (state) => {
      state.status = 'error';
      state.searchedFilms = [];
    });
  },
});

export const searchReducer = searchSlice.reducer;

export const { setSearchValue } = searchSlice.actions;
