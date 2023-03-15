import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { HiOutlineFilm } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SlClose } from 'react-icons/sl';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState();

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
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
            <Link className={styles.menuLink} to="/">
              Головна
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/films">
              Фільми
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/series">
              Серіали
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link className={styles.menuLink} to="/series">
              Інше
            </Link>
          </li>
        </ul>
        <div className={styles.other}>
          <div>
            <BsSearch className={styles.searchIcon} />
            <input type="text" className={styles.search} placeholder="Шукати фільм" />
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
