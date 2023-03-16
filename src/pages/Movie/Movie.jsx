import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../redux/FilmsSlice';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { RiArrowGoBackFill } from 'react-icons/ri';

import styles from './Movie.module.scss';
import { fomatMoneyNumber, genresToString, getTime, getYear, roundRating } from './utils';
import MovieSkeleton from './MovieSkeleton';

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.films.movieDetails);
  const status = useSelector((state) => state.films.status);
  const isLoading = status === 'loading';

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, []);

  if (isLoading || !movie.backdrop_path) return <MovieSkeleton />;

  return (
    <div className={styles.movie}>
      <Link to="/" className={styles.goBack}>
        <RiArrowGoBackFill /> <span>Повернутися назад</span>
      </Link>
      <div
        className={styles.mainInfo}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}>
        <div className={styles.poster__imgContainer}>
          <img
            className={styles.poster__img}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster image"
          />
        </div>
        <div className={styles.textBlock}>
          <h1 className={styles.textBlock__title}>
            {movie.title} ({getYear(movie.release_date)})
          </h1>
          <p className={styles.textBlock__genres}>
            • {genresToString(movie.genres)} • <span>{getTime(movie.runtime)}</span>
          </p>
          <div className={styles.textBlock__rating}>
            <div className={styles.textBlock__ratingItem}>
              {roundRating(movie.vote_average)}
              <span>%</span>
            </div>
            Рейтинг
            <div className={styles.textBlock__bookmarck}>
              <BsFillBookmarkStarFill />
            </div>
          </div>
          <div className={styles.textBlock__overview}>
            <h5>Обзор</h5>
            <p>{movie.overview}</p>
          </div>
          <div className={styles.textBlock__budget}>
            <h5>Бюджет</h5>
            <p>{fomatMoneyNumber(movie.budget)}</p>
          </div>
          <div className={styles.textBlock__revenue}>
            <h5>Сборы</h5>
            <p>{fomatMoneyNumber(movie.revenue)}</p>
          </div>
        </div>
      </div>
      <div className={styles.otherInfo}></div>
    </div>
  );
};

export default Movie;
