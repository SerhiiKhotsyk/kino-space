import styles from './MoviesSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { FreeMode, Pagination } from 'swiper';
import MovieCard from '../MovieCard/MovieCard';

const MoviesSlider = ({ moviesData, loading }) => {
  return (
    <>
      <div className={styles.moviesSlider}>
        <Swiper
          slidesPerView={'auto'}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className={`mySwiper ${styles.mySwiper}`}>
          {moviesData.map((obj) => (
            <SwiperSlide key={obj.id} className={styles.moviesSlide}>
              <MovieCard obj={obj} loading={loading} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MoviesSlider;
