import styled from 'styled-components';
import {
  GRAY_3,
  LIGHT_GRAY,
  SHADOW_BIG,
  SHADOW_SMALL,
  TRANSITION,
  VIOLET,
} from '../../../constants/variables';

export const Title = styled.h6`
  margin-top: 16px;
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
    margin-right: 6px;
  }
`;
export const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 16px;
  transition: ${TRANSITION};
  position: relative;
  box-shadow: 0 0 0 transparent, 0 0 0 2px ${LIGHT_GRAY};
  &:hover {
    transform: scale(1.025);
    box-shadow: ${SHADOW_BIG()}, 0 0 0 4px ${VIOLET};
  }
  &:active {
    transform: scale(0.95);
    box-shadow: ${SHADOW_SMALL()};
  }
`;
