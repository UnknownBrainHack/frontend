import styled from 'styled-components';
import BackImage from '../../../../images/backgroundPhoto.jpg';
import { BLACK, mobile, rgba } from '../../../../constants/variables';
export const BannerConent = styled.div`
  display: flex;
  height: 394px;
  h1 {
    margin-top: auto;
    color: white;
    position: relative;
    z-index: 1;
        ${mobile}{
              font-size: 48px;
        }
  }
`;
export const Banner = styled.section`
  position: relative;
  width: 100%;
  background: url('../../../../images/backgroundPhoto.jpg') no-repeat center
    center;
  // background: url(${BackImage}) no-repeat center
  //  center;
  background-size: cover;
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
`;
