import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

export const HOME_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  loop: true,
  watchOverflow: true,
  slidesPerView: 1,
  keyboard: true,
  simulateTouch: true,
  resistanceRatio: 0.6,
  spaceBetween: 15,
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    840: {
      slidesPerView: 3,
    },
    1040: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
    1560: {
      slidesPerView: 6,
    },
  },
};
