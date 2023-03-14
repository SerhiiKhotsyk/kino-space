import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import styles from './Categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../redux/CategoriesSlice';

const Categories = ({ moviesGenres }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.categories.genres);
  const [isOpenGenres, setIsOpenGenres] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleToggleCategory = () => {
    setIsOpenGenres(!isOpenGenres);
  };
  return (
    <div className={styles.categories}>
      <Link onClick={handleToggleCategory} className={styles.category}>
        Жанр
        {isOpenGenres ? (
          <IoIosArrowUp className={styles.category__showLessIcon} />
        ) : (
          <IoIosArrowDown className={styles.category__showMoreIcon} />
        )}
        <div
          className={
            isOpenGenres ? `${styles.subCategories} ${styles.active}` : styles.subCategories
          }>
          {genres.map((genre) => (
            <div key={genre.id} className={styles.subCategory}>
              {genre.name}
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
