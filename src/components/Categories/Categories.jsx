import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import styles from './Categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../../redux/CategoriesSlice';
import ReactSlider from 'react-slider';

const sortList = [
  { id: 1, name: 'Популярністю (спадання)' },
  { id: 2, name: 'Популярністю (зростання)' },
  { id: 3, name: 'Рейтингом (спадання)' },
  { id: 4, name: 'Рейтингом (зростання)' },
  { id: 5, name: 'Датою випуску (спадання)' },
  { id: 6, name: 'Датою випуску (зростання)' },
  { id: 7, name: 'Назвою (А-Я)' },
  { id: 8, name: 'Назвою (Я-А)' },
];

const Categories = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.categories.genres);
  const [isOpenGenres, setIsOpenGenres] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenRating, setIsOpenRating] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleToggleGenres = () => {
    setIsOpenGenres(!isOpenGenres);
  };

  const handleToggleSort = () => {
    setIsOpenSort(!isOpenSort);
  };

  const handleToggleRating = () => {
    setIsOpenRating(!isOpenRating);
  };

  return (
    <div className={styles.categories}>
      <Link onClick={handleToggleGenres} className={styles.category}>
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
      <Link onClick={handleToggleSort} className={styles.category}>
        Сортувати за <IoIosArrowDown className={styles.category__showMoreIcon} />
        <div
          className={
            isOpenSort
              ? `${styles.subCategories__sortBy} ${styles.active}`
              : styles.subCategories__sortBy
          }>
          {sortList.map((sortElem) => (
            <div key={sortElem.id} className={styles.subCategory}>
              {sortElem.name}
            </div>
          ))}
        </div>
      </Link>
      <Link onClick={handleToggleRating} className={styles.category}>
        Рейтинг <IoIosArrowDown className={styles.category__showMoreIcon} />
        <div className={isOpenRating ? `${styles.slider} ${styles.active}` : styles.slider}>
          <ReactSlider
            max={10}
            min={0}
            defaultValue={[0, 10]}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            pearling
            minDistance={1}
            className="horizontalSlider"
            thumbClassName="sliderThumb"
            trackClassName="sliderTrack"
            renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          />
        </div>
      </Link>
      <Link className={styles.category}>
        Рік <IoIosArrowDown className={styles.category__showMoreIcon} />
      </Link>
    </div>
  );
};

export default Categories;
