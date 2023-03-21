import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import styles from './Categories.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { fetchCategories } from '../../redux/CategoriesSlice';
import ReactSlider from 'react-slider';
import { fetchFilms, setGenreId, setSortType, setYear } from '../../redux/FilmsSlice';

const sortList = [
  { id: 1, name: 'Популярністю (спадання)', sort_by: 'popularity.desc' },
  { id: 2, name: 'Популярністю (зростання)', sort_by: 'popularity.asc' },
  { id: 3, name: 'Рейтингом (спадання)', sort_by: 'vote_average.desc' },
  { id: 4, name: 'Рейтингом (зростання)', sort_by: 'vote_average.asc' },
  { id: 5, name: 'Датою випуску (спадання)', sort_by: 'primary_release_date.desc' },
  { id: 6, name: 'Датою випуску (зростання)', sort_by: 'primary_release_date.asc' },
  { id: 7, name: 'Назвою (А-Я)', sort_by: 'title.desc' },
  { id: 8, name: 'Назвою (Я-А)', sort_by: 'title.asc' },
];

let date = new Date();
let actualYear = date.getFullYear();
const yearData = [];
for (let year = 1970; year <= actualYear; year += 1) {
  yearData.push(year);
}

const Categories = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.categories.genres);
  const [isOpenGenres, setIsOpenGenres] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenRating, setIsOpenRating] = useState(false);
  const [isOpenYear, setIsOpenYear] = useState(false);
  const page = useSelector((state) => state.films.page);
  const { sortBy, genreId, year } = useSelector((state) => state.films);

  const sortRef = useRef(null);
  const genresRef = useRef(null);
  const yearRef = useRef(null);
  const ratingRef = useRef(null);

  // обробляємо клік, якщо клік відбувається не по елементу сорт, то закриваємо попап
  useEffect(() => {
    const handleClose = (e) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setIsOpenSort(false);
      }
      if (genresRef.current && !e.composedPath().includes(genresRef.current)) {
        setIsOpenGenres(false);
      }
      if (yearRef.current && !e.composedPath().includes(yearRef.current)) {
        setIsOpenYear(false);
      }
      if (ratingRef.current && !e.composedPath().includes(ratingRef.current)) {
        setIsOpenRating(false);
      }
    };
    document.body.addEventListener('click', handleClose);

    // видаляємо прослухохувач при розмонтіровці елемента, якщо не видалити,
    //  то при наступному рендері цього компонента буде вже два прослуховувача і т.д.
    return () => {
      document.body.removeEventListener('click', handleClose);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const handleToggleGenres = () => {
    setIsOpenGenres(!isOpenGenres);
  };

  const handleToggleSort = () => {
    setIsOpenSort(!isOpenSort);
  };

  const handleToggleYear = () => {
    setIsOpenYear(!isOpenYear);
  };

  const handleToggleRating = () => {
    setIsOpenRating(!isOpenRating);
  };

  const handleSort = (sortType, genreId, year) => {
    dispatch(setYear(year));
    dispatch(setSortType(sortType));
    dispatch(setGenreId(genreId));
    dispatch(fetchFilms({ page, sortBy: sortType, genreId, year }));
  };

  return (
    <div className={styles.categories}>
      <Link ref={genresRef} onClick={handleToggleGenres} className={styles.category}>
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
            <div
              onClick={() => handleSort(sortBy, genre.id, year)}
              key={genre.id}
              className={styles.subCategory}>
              {genre.name}
            </div>
          ))}
        </div>
      </Link>
      <Link ref={sortRef} onClick={handleToggleSort} className={styles.category}>
        Сортувати за <IoIosArrowDown className={styles.category__showMoreIcon} />
        <div
          className={
            isOpenSort
              ? `${styles.subCategories__sortBy} ${styles.active}`
              : styles.subCategories__sortBy
          }>
          {sortList.map((sortElem) => (
            <div
              onClick={() => handleSort(sortElem.sort_by, genreId, year)}
              key={sortElem.id}
              className={styles.subCategory}>
              {sortElem.name}
            </div>
          ))}
        </div>
      </Link>
      <Link ref={ratingRef} onClick={handleToggleRating} className={styles.category}>
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
      <Link ref={yearRef} onClick={handleToggleYear} className={styles.category}>
        Рік <IoIosArrowDown className={styles.category__showMoreIcon} />
        <div
          className={
            isOpenYear
              ? `${styles.subCategories__sortBy} ${styles.active}`
              : styles.subCategories__sortBy
          }>
          {yearData.map((year) => (
            <div
              onClick={() => handleSort(sortBy, genreId, year)}
              key={year}
              className={styles.subCategory}>
              {year}
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Categories;
