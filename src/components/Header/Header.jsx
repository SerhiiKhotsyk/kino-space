import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { HiOutlineFilm } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SlClose } from 'react-icons/sl';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedMovie, setSearchValue } from '../../redux/SearchSlice';
import debounce from 'lodash.debounce';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { searchValue, searchedFilms, status } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    dispatch(setSearchValue(''));
    setIsSearchActive(false);
    window.scrollTo(0, 0);
  };

  // обмежує кількість запитів на сервер - при введенні значення в інпут
  // з інтервалом менше ніж півсекунди, запит на сервер не здійснюється
  // був використаний хук useCallback, для зберігання посилання на функцію при монтуванні компонента
  // щоб при кожній зміні (рендері) компонента не створювалася нова функція і не викликалася заново
  const debounceInput = useCallback(
    debounce((val) => {
      dispatch(getSearchedMovie(val));
    }, 500),
    [],
  );

  const handleSearchQuery = (e) => {
    if (e.target.value) {
      setIsSearchActive(true);
    } else {
      setIsSearchActive(false);
    }
    dispatch(setSearchValue(e.target.value));
  };

  useEffect(() => {
    debounceInput(searchValue);
  }, [searchValue]);

  const handleClosePopup = () => {
    dispatch(setSearchValue(''));
    setIsSearchActive(false);
    handleCloseMenu();
  };

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <p>
          <HiOutlineFilm className={styles.logoIcon} />
        </p>
        <p>KINO SPACE</p>
      </Link>
      <div className={isOpen ? `${styles.header__right} ${styles.active}` : styles.header__right}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link onClick={handleCloseMenu} className={styles.menuLink} to="/">
              Головна
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link onClick={handleCloseMenu} className={styles.menuLink} to="/films">
              Фільми
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link onClick={handleCloseMenu} className={styles.menuLink} to="/series">
              Серіали
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link onClick={handleCloseMenu} className={styles.menuLink} to="/series">
              Інше
            </Link>
          </li>
        </ul>
        <div className={styles.other}>
          <div className={styles.search}>
            <BsSearch className={styles.searchIcon} />
            <input
              onSubmit={() => setIsSearchActive(false)}
              ref={inputRef}
              onChange={(e) => handleSearchQuery(e)}
              value={searchValue}
              type="text"
              className={styles.searchInput}
              placeholder="Шукати фільм"
            />
            <div className={isSearchActive ? styles.searchFilms : styles.searchFilms__hidden}>
              {searchedFilms.map((filmObj) => (
                <Link
                  key={filmObj.id}
                  onClick={handleClosePopup}
                  to={`/movie/${filmObj.id}`}
                  className={styles.searchFilm}>
                  <h3>{filmObj.original_title}</h3>
                </Link>
              ))}
            </div>
          </div>
          <BsFillBookmarkStarFill className={styles.bookmark} />
          <button className={styles.loginButton}>Вхід</button>
        </div>
        <button
          onClick={handleCloseMenu}
          className={isOpen ? `${styles.menu__close} ${styles.active}` : styles.menu__close}>
          <SlClose />
        </button>
      </div>
      <button onClick={handleOpenMenu} className={styles.menu__burger}>
        <RxHamburgerMenu />
      </button>
    </div>
  );
};

export default Header;
