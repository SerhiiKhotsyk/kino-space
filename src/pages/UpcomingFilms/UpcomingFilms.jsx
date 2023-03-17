import { useEffect } from 'react';
import { TfiArrowCircleLeft } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import MovieCard from '../../components/MovieCard/MovieCard';
import MyButton from '../../components/MyButton';
import { fetchCategories } from '../../redux/CategoriesSlice';
import { fetchMoreUpcomingFilms, fetchUpcomingFilms } from '../../redux/UpcomingFilmsSlice';
import styles from './UpcomingFilms.module.scss';

const UpcomingFilms = () => {
  const dispatch = useDispatch();
  const { films, status, page } = useSelector((state) => state.upcomingFilms);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(fetchUpcomingFilms());
    dispatch(fetchCategories());
  }, []);

  const handleShowMoreFilms = () => {
    const nextPage = page + 1;
    dispatch(fetchMoreUpcomingFilms(nextPage));
  };

  return (
    <div className={styles.films}>
      <Categories />

      <h1 className={styles.films__title}>
        <Link to="/">
          <TfiArrowCircleLeft className={styles.films__titleIcon} />
        </Link>
        Скоро в кінотеатрах
      </h1>

      <div className={styles.films__items}>
        {films.map((obj) => (
          <div key={obj.id} className={styles.films__item}>
            <Link to={`/movie/${obj.id}`}>
              <MovieCard obj={obj} loading={isLoading} />
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.showMore}>
        <div onClick={handleShowMoreFilms}>
          <MyButton>Показати більше</MyButton>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFilms;
