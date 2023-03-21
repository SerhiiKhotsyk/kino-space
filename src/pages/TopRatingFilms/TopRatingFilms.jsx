import { useEffect } from 'react';
import { TfiArrowCircleLeft } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import MyButton from '../../components/MyButton';
import { fetchCategories } from '../../redux/CategoriesSlice';
import { fetchMoreTopRatingFilms, fetchTopRatingFilms } from '../../redux/TopRatingFilmsSlice';
import styles from './TopRatingFilms.module.scss';

const TopRatingFilms = () => {
  const dispatch = useDispatch();
  const { films, status, page } = useSelector((state) => state.topRatingFilms);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(fetchTopRatingFilms());
    dispatch(fetchCategories());
  }, []);

  const handleShowMoreFilms = () => {
    const nextPage = page + 1;
    dispatch(fetchMoreTopRatingFilms(nextPage));
  };

  return (
    <div className={styles.films}>
      <h1 className={styles.films__title}>
        <Link to="/">
          <TfiArrowCircleLeft className={styles.films__titleIcon} />
        </Link>
        Фільми з найвищим рейтингом
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

export default TopRatingFilms;
