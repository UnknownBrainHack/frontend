import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperWrapper } from './styled';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function Slider({ children, overflow }) {
  const [slides, setSlides] = useState();
  const sliderRef = useRef();
  useEffect(() => {
    setSlides(Array.isArray(children) ? children : [children]);
  }, [children]);

  useEffect(() => {
    sliderRef.current.scrollbar.updateSize();
  }, [slides]);


  return (
    <SwiperWrapper overflow={overflow}>
      <Swiper
        pagination={{ clickable: true }}
        onInit={(ref)=>{sliderRef.current = ref;
        }}
        navigation={{
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique',
        }}
        spaceBetween={20}
        slidesPerView={1}
        scrollbar={{ draggable: true, hide: false }}
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
