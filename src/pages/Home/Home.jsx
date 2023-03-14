import { Link } from 'react-router-dom';
import { TfiArrowCircleRight } from 'react-icons/tfi';

import styles from './Home.module.scss';
import { bgImages, filmsData } from '../../data/moviesData';
import BgSlider from '../../components/BgSlider/BgSlider';
import MoviesSlider from '../../components/MoviesSlider/MoviesSlider';
import { useEffect, useState } from 'react';
import { myAxios } from '../../myAxios';

const Home = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    myAxios
      .get('movie/popular')
      .then((resp) => {
        setPopularFilms(resp.data.results);
        setLoading(false);
      })
      .catch((err) => {
        alert('Невдалося отримати фільми');
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.home}>
      <BgSlider bgImages={bgImages} />
      <div className={styles.films}>
        <h2 className={styles.filmsTitle}>
          <Link to="/" className={styles.titleLink}>
            ТОП переглядів <TfiArrowCircleRight className={styles.titleLink__arrow} />
          </Link>
        </h2>

        <MoviesSlider moviesData={popularFilms} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
