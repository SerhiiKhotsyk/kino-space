import { Link } from 'react-router-dom';
import { TfiArrowCircleRight } from 'react-icons/tfi';

import styles from './Home.module.scss';
import BgSlider from '../../components/BgSlider/BgSlider';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../redux/FilmsSlice';
import { fetchTopRatingFilms } from '../../redux/TopRatingFilmsSlice';
import { fetchUpcomingFilms } from '../../redux/UpcomingFilmsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const popularFilms = useSelector((state) => state.films.films);
  const status = useSelector((state) => state.films.status);
  const topRatingFilms = useSelector((state) => state.topRatingFilms.films);
  const upcomingFims = useSelector((state) => state.upcomingFilms.films);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchTopRatingFilms());
    dispatch(fetchUpcomingFilms());
  }, []);

  return (
    <div className={styles.home}>
      <BgSlider />
      <div className={styles.films}>
        <div className={styles.films__block}>
          <h2 className={styles.filmsTitle}>
            <Link to="/top-views-films" className={styles.titleLink}>
              ТОП переглядів <TfiArrowCircleRight className={styles.titleLink__arrow} />
            </Link>
          </h2>
          <MoviesSlider moviesData={popularFilms} loading={isLoading} />
        </div>

        <div className={styles.films__block}>
          <h2 className={styles.filmsTitle}>
            <Link to="/top-rating-films" className={styles.titleLink}>
              Найвищий рейтинг <TfiArrowCircleRight className={styles.titleLink__arrow} />
            </Link>
          </h2>
          <MoviesSlider moviesData={topRatingFilms} loading={isLoading} />
        </div>

        <div className={styles.films__block}>
          <h2 className={styles.filmsTitle}>
            <Link to="/upcoming-films" className={styles.titleLink}>
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
