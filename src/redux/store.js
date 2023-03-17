import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './CategoriesSlice';
import { filmsReducer } from './FilmsSlice';
import { searchReducer } from './SearchSlice';
import { topRatingFilmsReducer } from './TopRatingFilmsSlice';
import { upcomingFilmsReducer } from './UpcomingFilmsSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    categories: categoriesReducer,
    topRatingFilms: topRatingFilmsReducer,
    upcomingFilms: upcomingFilmsReducer,
    search: searchReducer,
  },
});

export default store;
