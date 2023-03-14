import { configureStore } from '@reduxjs/toolkit';
import { filmsReducer } from './FilmsSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export default store;
