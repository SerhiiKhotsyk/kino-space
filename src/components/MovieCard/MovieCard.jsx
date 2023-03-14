import styles from './MovieCard.module.scss';

import { HiOutlineBookmark } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MovieCard = ({ obj, loading }) => {
  return (
    <div className={styles.movieCard}>
      {loading ? (
        <Skeleton height="100%" baseColor="#202020" highlightColor="#4b4b4b" />
      ) : (
        <>
          <div className={styles.movieCard__imageContainer}>
            <img
              className={styles.movieCard__image}
              src={`https://image.tmdb.org/t/p/w300/${obj.poster_path}`}
            />
          </div>
          <div className={styles.movieCard__info}>
            <HiOutlineBookmark className={styles.info__bookmark} />
            <div className={styles.info__playBtn}>
              <FaPlay className={styles.playBtn__icon} />
            </div>
            <p className={styles.info__descr}>{obj.title}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
