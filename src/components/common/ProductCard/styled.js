import styled, { css } from 'styled-components';
import {
  BLACK,
  BLUE,
  GRAY_3,
  LIGHT_GRAY, RED,
  SHADOW_BIG,
  SHADOW_SMALL, tablet,
  TRANSITION,
  VIOLET, WHITE,
} from '../../../constants/variables';

export const LikeWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
  background-color: ${WHITE};
  border-radius: 20px;
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0);
  transition: ${TRANSITION};
  span{
    display: none;
    margin-right: 4px;
    line-height: 8px;
    transition: ${TRANSITION};
    opacity: 0;
    transform: translateY(2px);
    ${tablet}{
      display: block;
      opacity: 1;
    }
  }
  svg{
    transition: ${TRANSITION};
    transform: translateY(1px);
    &:hover path{
      fill: ${GRAY_3};
    }
  }
  svg path{
    stroke: ${GRAY_3};
    stroke-width: 1px;
    stroke-linejoin: round;
    fill: none;
    transition: ${TRANSITION};
  }
  &:hover{
    svg path{
    }
  }
  ${p=>p.likes && css`
    svg{
      path{
        fill: ${RED};
        stroke: none;
      }
      &:hover path{
        stroke: ${RED};
        fill: none;
      }
    }
  `}
`;
export const Description = styled.div`
  color: ${GRAY_3};
  font-size: 14px;
  line-height: 18px;
  margin-top: 6px;
`;
export const Rating = styled.div`
  span {
    color: ${BLUE};
    font-weight: bold;
  }
`;
export const ImageWrapper = styled.a`
  display: block;
  position: relative;
  width: 100%;
  padding-bottom: 125%;
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
export const Title = styled.a`
  display: inline-block;
  margin: 16px 0 0 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
  font-size: 18px;
  color: ${BLACK};
  font-weight: bold;
  text-decoration: none;
`;
export const LikeButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${GRAY_3};
  cursor: pointer;
  padding: 5px;
`;
export const Card = styled.div`
  color: unset;
  overflow: hidden;
  max-width: 100%;
  display: block;
  background: #ffffff;
  border-radius: 16px;
  padding: 16px 16px 20px;
  text-decoration: none;
  transition: ${TRANSITION};
  position: relative;
  box-shadow: 0 0 0 transparent, 0 0 0 2px ${LIGHT_GRAY};
  &:hover {
    ${LikeWrapper}{
      background-color: ${WHITE};
      box-shadow: 0 4px 4px 0 rgba(0,0,0,0.25);
      span{
        display: block;
        transition-delay: 0.4s;
        opacity: 1;
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
