import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperWrapper } from './styled';

SwiperCore.use([Navigation,Pagination]);

function Slider({ children, overflow }) {
  const [slides, setSlides] = useState();
  useEffect(() => {
    setSlides(Array.isArray(children) ? children : [children]);
  }, [children]);

  return (
    <SwiperWrapper overflow={overflow}>
      <Swiper
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique'
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
}

export default Slider;
