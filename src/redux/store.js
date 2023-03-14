import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './CategoriesSlice';
import { filmsReducer } from './FilmsSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    categories: categoriesReducer,
  },
});

export default store;
