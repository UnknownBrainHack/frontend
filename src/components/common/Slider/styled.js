import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  .swiper-container {
    ${(p) =>
    p.overflow &&
      `
      overflow: unset;
    `}
  }
`;
