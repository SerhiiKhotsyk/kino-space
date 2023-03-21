import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './CategoriesSlice';
import { filmsReducer } from './FilmsSlice';
import { searchReducer } from './SearchSlice';
import { topRatingFilmsReducer } from './TopRatingFilmsSlice';
import { upcomingFilmsReducer } from './UpcomingFilmsSlice';
import { topViewsFilmsReducer } from './TopViewsFilmsSlice';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    categories: categoriesReducer,
    topRatingFilms: topRatingFilmsReducer,
    upcomingFilms: upcomingFilmsReducer,
    topViewsFilms: topViewsFilmsReducer,
    search: searchReducer,
  },
});

export default store;
