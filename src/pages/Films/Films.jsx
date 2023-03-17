import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TfiArrowCircleLeft } from 'react-icons/tfi';

import styles from './Films.module.scss';
import Categories from '../../components/Categories/Categories';
import MovieCard from '../../components/MovieCard/MovieCard';
import { fetchFilms, fetchMoreFilms } from '../../redux/FilmsSlice';
import MyButton from '../../components/MyButton';
import { fetchCategories } from '../../redux/CategoriesSlice';

const Films = () => {
  const dispatch = useDispatch();
  const { films, status, page } = useSelector((state) => state.films);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(fetchFilms());
    dispatch(fetchCategories());
  }, []);

  const handleShowMoreFilms = () => {
    const nextPage = page + 1;
    dispatch(fetchMoreFilms(nextPage));
  };

  return (
    <div className={styles.films}>
      <Categories />

      <h1 className={styles.films__title}>
        <Link to="/">
          <TfiArrowCircleLeft className={styles.films__titleIcon} />
        </Link>
        Всі фільми на <span>kino space</span>
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

export default Films;
