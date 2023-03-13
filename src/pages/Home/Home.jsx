import styles from './Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HiOutlineBookmark } from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';
import { TfiArrowCircleRight } from 'react-icons/tfi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import { FreeMode, Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.bgSlider}>
        <Swiper
          autoplay={{
            delay: 2500,
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
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideContainer}>
              <img src="/images/bg/film-1.jpg" className={styles.slideImg} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src="/images/bg/film-2.jpg" className={styles.slideImg} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideContainer}>
              <img src="/images/bg/film-3.jpg" className={styles.slideImg} />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideContainer}>
              <img src="/images/bg/film-4.jpg" className={styles.slideImg} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.films}>
        <h2 className={styles.filmsTitle}>
          <Link to="/" className={styles.titleLink}>
            ТОП переглядів <TfiArrowCircleRight className={styles.titleLink__arrow} />
          </Link>
        </h2>
        <div className={styles.filmsSlider}>
          <Swiper
            slidesPerView={'auto'}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className={`mySwiper ${styles.mySwiper}`}>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/cart-img/1.jpg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>some descritiom, 2020</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/bg/film-1.jpg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>
                    some descritiom, 2020, sfsfasdfas as asf asddf sa{' '}
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/cart-img/2.jpeg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>some descritiom, 2020</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/cart-img/3.jpg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>some descritiom, 2020</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/cart-img/4.jpg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>some descritiom, 2020</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/cart-img/5.jpeg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>some descritiom, 2020</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/cart-img/6.jpeg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>some descritiom, 2020</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/cart-img/7.jpg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>some descritiom, 2020</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.filmsSlide}>
              <div className={styles.filmCard}>
                <div className={styles.filmCard__imageContainer}>
                  <img className={styles.filmCard__image} src="/images/cart-img/1.jpg" />
                </div>
                <div className={styles.filmCard__info}>
                  <HiOutlineBookmark className={styles.info__bookmark} />
                  <div className={styles.info__playBtn}>
                    <FaPlay className={styles.playBtn__icon} />
                  </div>
                  <p className={styles.info__descr}>some descritiom, 2020</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
