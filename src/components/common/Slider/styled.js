import styled from 'styled-components';

export const SwiperWrapper = styled.div`
  .swiper-container {
    ${(p) =>
      p.overflow &&
      `
      overflow: unset;
      padding: 0 0 40px;
    `}
  }
`;
