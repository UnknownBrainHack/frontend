import styled from 'styled-components';
import {
  SHADOW_BIG,
  SHADOW_SMALL,
  TRANSITION,
  VIOLET,
} from '../../../constants/variables';

export const Title = styled.h6`
  margin-top: 16px;
`;
export const Card = styled.div`
  background: #ffffff;
  border: 2px solid #efefef;
  border-radius: 16px;
  padding: 16px;
  transition: 0.2s ease-out;
  transition: ${TRANSITION};
  &:hover {
    border: 2px solid ${VIOLET};
    transform: scale(1.025);
    box-shadow: ${SHADOW_BIG()};
  }
  &:active {
    transform: scale(0.95);
    box-shadow: ${SHADOW_SMALL()};
  }
`;
