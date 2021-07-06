import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperWrapper } from './styled';

function Slider({ children, overflow }) {
  const [slides, setSlides] = useState();
  useEffect(() => {
    setSlides(Array.isArray(children) ? children : [children]);
  }, [children]);

  return (
    <SwiperWrapper overflow={overflow}>
      <Swiper spaceBetween={20} slidesPerView={5}>
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
}

export default Slider;
