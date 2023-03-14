import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import styles from './Categories.module.scss';

const Categories = ({ moviesGenres }) => {
  return (
    <div className={styles.categories}>
      <Link className={styles.category}>
        Жанр <IoIosArrowDown className={styles.category__showMoreIcon} />
        <IoIosArrowUp className={styles.category__showLessIcon} />
        <div className={styles.subCategories}>
          {moviesGenres.map((genre) => (
            <div key={genre} className={styles.subCategory}>
              {genre}
            </div>
          ))}
        </div>
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
  );
};

export default Categories;
