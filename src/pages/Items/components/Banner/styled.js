import styled from 'styled-components';
import { BLACK, rgba } from '../../../../constants/variables';
export const BannerConent = styled.div`
  position: relative;
  height: 394px;
  width: 100%;
  background: url('../../../../images/RussianDragon.png') no-repeat center
    center;
  background-size: cover;
  display: flex;
  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      ${rgba(BLACK, 0)} 0%,
      ${rgba(BLACK, 0.25)} 60%,
      ${rgba(BLACK, 0.5)} 100%
    );
  }

  h1 {
    margin-top: auto;
    color: white;
    margin-left: 30px;
    position: relative;
    z-index: 1;
  }
`;
export const Banner = styled.section``;
