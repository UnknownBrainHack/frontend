import styled, { css } from 'styled-components';
import {
  BLUE,
  BORDER_NORMAL,
  LIGHT_BLUE,
  TRANSITION,
} from '../../../constants/variables';

export const StyledButton = styled.button`
  background: ${BLUE};
  border: none;
  border-radius: ${BORDER_NORMAL};
  padding: 16px 24px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: ${TRANSITION};
  white-space: nowrap;
  display: inline-block;

  ${(p) =>
    p.secondary &&
    css`
      background: ${LIGHT_BLUE};
      color: ${BLUE};
    `}

  ${(p) =>
    p.simple &&
    css`
      background: unset;
      color: ${BLUE};
      text-decoration: underline;
      font-weight: 500;
    `}

  &:hover {
    opacity: 0.77;
  }

  &:active {
    transform: scale(0.99) translateY(3px);
  }

  &:focus {
  }
`;
