import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TfiArrowCircleLeft } from 'react-icons/tfi';

import styles from './Films.module.scss';
import { moviesGenres } from '../../data/moviesData';
import Categories from '../../components/Categories/Categories';
import MovieCard from '../../components/MovieCard/MovieCard';
import { fetchFilms, fetchMoreFilms } from '../../redux/FilmsSlice';
import MyButton from '../../components/MyButton';
import { fetchCategories } from '../../redux/CategoriesSlice';
import ReactSlider from 'react-slider';

const Films = () => {
  const dispatch = useDispatch();
  const { filmsData, status, page } = useSelector((state) => state.films);
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
      <Categories moviesGenres={moviesGenres} />

      <h1 className={styles.films__title}>
        <Link to="#">
          <TfiArrowCircleLeft className={styles.films__titleIcon} />
        </Link>
        Всі фільми на <span>kino space</span>
      </h1>

      <div className={styles.films__items}>
        {filmsData.map((obj) => (
          <div key={obj.id} className={styles.films__item}>
            <MovieCard obj={obj} loading={isLoading} />
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
