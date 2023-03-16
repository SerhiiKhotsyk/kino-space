import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import styles from './Movie.module.scss';

const MovieSkeleton = () => {
  return (
    <div className={styles.movie}>
      <Link to="/" className={styles.goBack}>
        <Skeleton height="100%" width="300px" baseColor="#202020" highlightColor="#4b4b4b" />
      </Link>
      <div
        className={styles.mainInfo}
        style={{
          backgroundImage: `grey`,
        }}>
        <div className={styles.poster__imgContainer}>
          <Skeleton height="100%" width="100%" baseColor="#202020" highlightColor="#4b4b4b" />
        </div>
        <div className={styles.textBlock}>
          <h1 className={styles.textBlock__title}>
            <Skeleton height="100%" width="100%" baseColor="#202020" highlightColor="#4b4b4b" />
          </h1>
          <p className={styles.textBlock__genres}>
            <Skeleton height="100%" width="300px" baseColor="#202020" highlightColor="#4b4b4b" />
          </p>
          <div className={styles.textBlock__rating}>
            <Skeleton
              height="70px"
              width="70px"
              baseColor="#202020"
              highlightColor="#4b4b4b"
              style={{ marginRight: '10px', borderRadius: '50%' }}
            />

            <Skeleton height="100%" width="90px" baseColor="#202020" highlightColor="#4b4b4b" />
            <div className={styles.textBlock__bookmarck}>
              <Skeleton height="40px" width="30px" baseColor="#202020" highlightColor="#4b4b4b" />
            </div>
          </div>
          <div className={styles.textBlock__overview}>
            <h5>
              <Skeleton height="100%" width="70px" baseColor="#202020" highlightColor="#4b4b4b" />
            </h5>
            <p>
              <Skeleton height="100%" width="100%" baseColor="#202020" highlightColor="#4b4b4b" />
            </p>
            <p>
              <Skeleton height="100%" width="100%" baseColor="#202020" highlightColor="#4b4b4b" />
            </p>
            <p>
              <Skeleton height="100%" width="50%" baseColor="#202020" highlightColor="#4b4b4b" />
            </p>
          </div>
          <div className={styles.textBlock__budget}>
            <h5>
              <Skeleton height="100%" width="70px" baseColor="#202020" highlightColor="#4b4b4b" />
            </h5>
            <p>
              <Skeleton height="100%" width="150px" baseColor="#202020" highlightColor="#4b4b4b" />
            </p>
          </div>
          <div className={styles.textBlock__revenue}>
            <h5>
              <Skeleton height="100%" width="70px" baseColor="#202020" highlightColor="#4b4b4b" />
            </h5>
            <p>
              <Skeleton height="100%" width="150px" baseColor="#202020" highlightColor="#4b4b4b" />
            </p>
          </div>
        </div>
      </div>
      <div className={styles.otherInfo}></div>
    </div>
  );
};

export default MovieSkeleton;
