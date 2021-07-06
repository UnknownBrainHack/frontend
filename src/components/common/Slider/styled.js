import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  .swiper-slide {
    max-width: 300px;
  }
  .swiper-container {
    ${(p) =>
    p.overflow &&
      `
      overflow: unset;
    `}
  }
`;
