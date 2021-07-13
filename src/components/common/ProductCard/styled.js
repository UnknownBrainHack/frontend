import styled, { css } from 'styled-components';
import {
  BLUE,
  GRAY_3,
  LIGHT_GRAY, RED,
  SHADOW_BIG,
  SHADOW_SMALL,
  TRANSITION,
  VIOLET, WHITE,
} from '../../../constants/variables';

export const LikeWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0);
  transition: ${TRANSITION};
  span{
    transition: ${TRANSITION};
    opacity: 0;
    transform: translateX(100px);
  }
  svg path{
    transition: ${TRANSITION};
  }
  &:hover{
    svg path{
      stroke: ${RED};
    }
  }
  ${p=>p.likes && css`
    svg path{
      stroke: ${RED};
      fill: ${RED};
    }
  `}
`;
export const Description = styled.div`
  color: ${GRAY_3};
  font-size: 14px;
  line-height: 18px;
  margin-top: 19px;
`;
export const Rating = styled.div`
  span {
    color: ${BLUE};
    font-weight: bold;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 16px;
  overflow: hidden;
`;
export const StyledImage = styled.img`
  max-width: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  max-height: 100%;
  object-fit: cover;
`;
export const Title = styled.h6`
  display: inline-block;
  margin: 16px 0 0 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
`;
export const LikeButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  font-weight: bold;
  color: ${GRAY_3};
  cursor: pointer;
  svg {
    margin-left: 6px;
  }
`;
export const Card = styled.a`
  color: unset;
  overflow: hidden;
  max-width: 100%;
  display: block;
  background: #ffffff;
  border-radius: 16px;
  padding: 16px 16px 20px;
  transition: 0.2s ease-out;
  text-decoration: none;
  transition: ${TRANSITION};
  position: relative;
  box-shadow: 0 0 0 transparent, 0 0 0 2px ${LIGHT_GRAY};
  &:hover {
    ${LikeWrapper}{
      transition-delay: 0.4s;
      background-color: ${WHITE};
      box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
      span{
        transition-delay: 0.4s;
        opacity: 1;
        transform: translateX(0);
      }
    }
    z-index: 1;
    transform: scale(1.025);
    box-shadow: ${SHADOW_BIG()}, 0 0 0 4px ${VIOLET};
  }
  &:active {
    transform: scale(0.95);
    box-shadow: ${SHADOW_SMALL()};
  }
`;
