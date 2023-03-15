import { Link } from 'react-router-dom';
import { TfiArrowCircleRight } from 'react-icons/tfi';

import styles from './Home.module.scss';
import BgSlider from '../../components/BgSlider/BgSlider';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTopRatingFilms,
  fetchTopViewsFilms,
  fetchUpcomingFilms,
} from '../../redux/FilmsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const popularFilms = useSelector((state) => state.films.popularFilms);
  const status = useSelector((state) => state.films.status);
  const topRatingFilms = useSelector((state) => state.films.topRatingFilms);
  const upcomingFims = useSelector((state) => state.films.upcomingFims);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(fetchTopViewsFilms());
    dispatch(fetchTopRatingFilms());
    dispatch(fetchUpcomingFilms());
  }, []);

  return (
    <div className={styles.home}>
      <BgSlider />
      <div className={styles.films}>
        <div className={styles.films__block}>
          <h2 className={styles.filmsTitle}>
            <Link to="/" className={styles.titleLink}>
              ТОП переглядів <TfiArrowCircleRight className={styles.titleLink__arrow} />
            </Link>
          </h2>
          <MoviesSlider moviesData={popularFilms} loading={isLoading} />
        </div>

        <div className={styles.films__block}>
          <h2 className={styles.filmsTitle}>
            <Link to="/" className={styles.titleLink}>
              Найвищий рейтинг <TfiArrowCircleRight className={styles.titleLink__arrow} />
            </Link>
          </h2>
          <MoviesSlider moviesData={topRatingFilms} loading={isLoading} />
        </div>

        <div className={styles.films__block}>
          <h2 className={styles.filmsTitle}>
            <Link to="/" className={styles.titleLink}>
              Скоро в кінотеатрах <TfiArrowCircleRight className={styles.titleLink__arrow} />
            </Link>
          </h2>
          <MoviesSlider moviesData={upcomingFims} loading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Home;
