import styles from './Films.module.scss';
import { TfiArrowCircleLeft } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Films = () => {
  return (
    <div className={styles.films}>
      <div className={styles.categories}>
        <Link className={styles.category}>
          Жанр <IoIosArrowDown className={styles.category__showMoreIcon} />{' '}
          <IoIosArrowUp className={styles.category__showLessIcon} />
        </Link>
        <Link className={styles.category}>
          Актори <IoIosArrowDown className={styles.category__showMoreIcon} />
        </Link>
        <Link className={styles.category}>
          Режиссер <IoIosArrowDown className={styles.category__showMoreIcon} />
        </Link>
        <Link className={styles.category}>
          Країна <IoIosArrowDown className={styles.category__showMoreIcon} />
        </Link>
        <Link className={styles.category}>
          Рік <IoIosArrowDown className={styles.category__showMoreIcon} />
        </Link>
      </div>

      <h1 className={styles.films__title}>
        <Link to="#">
          <TfiArrowCircleLeft className={styles.films__titleIcon} />
        </Link>{' '}
        Всі фільми на <span>kino space</span>
      </h1>
    </div>
  );
};

export default Films;
