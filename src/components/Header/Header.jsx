import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import { HiOutlineFilm } from 'react-icons/hi';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <p>
          <HiOutlineFilm className={styles.logoIcon} />
        </p>
        <p>KINO SPACE</p>
      </Link>
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
      </ul>
      <div className={styles.other}>
        <div>
          <BsSearch className={styles.searchIcon} />
          <input type="text" className={styles.search} placeholder="Шукати фільм" />
        </div>
        <BsFillBookmarkStarFill className={styles.bookmark} />
        <button className={styles.loginButton}>Вхід</button>
      </div>
    </div>
  );
};

export default Header;
