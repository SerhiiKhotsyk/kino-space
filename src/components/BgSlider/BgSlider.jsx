import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './BgSlider.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { useEffect, useState } from 'react';
import { myAxios } from '../../myAxios';

const BgSlider = ({ bgImages }) => {
  const [latesFilms, setLatestFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    myAxios
      .get('/movie/upcoming')
      .then((resp) => {
        const LatesFiveFilms = resp.data.results.slice(0, 5);
        setLatestFilms(LatesFiveFilms);
        setLoading(false);
      })
      .catch((err) => {
        alert('Невдалося отримати фільми');
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.bgSlider}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper">
        {latesFilms.map((obj) => (
          <SwiperSlide key={obj.id} className={styles.slide}>
            <div className={styles.slideContainer}>
              <img
                src={`https://image.tmdb.org/t/p/original/${obj.backdrop_path}`}
                className={styles.slideImg}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BgSlider;
