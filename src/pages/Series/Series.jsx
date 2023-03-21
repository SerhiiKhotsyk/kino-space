import { Link } from 'react-router-dom';
import { TfiArrowCircleLeft } from 'react-icons/tfi';

import styles from './Series.module.scss';
import Categories from '../../components/Categories/Categories';

const Series = () => {
  return (
    <div className={styles.series}>
      <Categories />

      <h1 className={styles.series__title}>
        <Link to="#">
          <TfiArrowCircleLeft className={styles.series__titleIcon} />
        </Link>
        Всі серіали на <span>kino space</span>
      </h1>
    </div>
  );
};

export default Series;
