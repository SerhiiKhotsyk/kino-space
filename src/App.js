import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './scss/app.scss';
import Footer from './components/Footer/Footer';
import Films from './pages/Films/Films';
import Series from './pages/Series/Series';
import Movie from './pages/Movie/Movie';
import TopRatingFilms from './pages/TopRatingFilms/TopRatingFilms';
import UpcomingFilms from './pages/UpcomingFilms/UpcomingFilms';
import TopViewsFilms from './pages/TopViewsFilms/TopViewsFilms';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/top-views-films" element={<TopViewsFilms />} />
        <Route path="/top-rating-films" element={<TopRatingFilms />} />
        <Route path="/upcoming-films" element={<UpcomingFilms />} />
      </Routes>
      <Footer />
    </div>
  );
};
