import styled, { css } from 'styled-components';
import { BLACK, rgba, TRANSITION } from "../../../constants/variables";
export const StyledProductList = styled.div``;

export const Arrow = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 40px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${TRANSITION};
  cursor: pointer;
  &.swiper-button-disabled{
    opacity: 0.4;
    cursor: default;
  }
  &:hover{
    background-color: ${rgba(BLACK,0.15)};
  }
  ${p=>p.left && css`
    svg{
      transform: scaleX(-1);
    }
  `}
`;
export const ArrowWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  ${Arrow}{
    &:first-of-type{
      margin-right: 10px;
    }
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const SubTitle = styled.h3`
  margin-top: 64px;
  margin-bottom: 16px;
  color: ${BLACK};
`;
