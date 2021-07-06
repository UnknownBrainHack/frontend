import styled, { css } from 'styled-components';
import { LIGHT_GRAY, tablet, TRANSITION, WHITE } from '../../../constants/variables';
import { Container } from '../../ui/styled';

export const MobileWrarrer = styled.div`
  background-color: ${WHITE};
  display: none;
  position: fixed;
  align-items: center;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  transform: translateX(-100%);
  transition: ${TRANSITION};
  z-index: 999;
  ${tablet} {
    display: flex;
  }
  ${p => p.active && css`
    transform: translateX(0%);
  `}
`;
export const Burger = styled.button`
  top: 10px;
  left: 10px;
  display: none;
  position: absolute;
  z-index: 1000;
  cursor: pointer;
  border: unset;
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: unset;
  justify-content: center;
  align-items: center;

  span {
    position: relative;
    display: block;
    width: 20px;
    height: 4px;
    background: #222;
    transition: all .2s ease-in-out;

    &:before, &:after {
      left: 0;
      position: absolute;
      background: #222;
      content: '';
      width: 20px;
      height: 4px;
      transition: all .2s ease-in-out;
    }

    &:before {
      top: -8px;
    }

    &:after {
      top: 8px;
    }
  }

  ${p => p.active && css`
    span {
      background: transparent;

      &:before {
        transform: rotate(45deg) translate(5px, 6px);
      }

      &:after {
        transform: rotate(-45deg) translate(5px, -6px);
      }
    }
  `}
  ${tablet} {
    display: flex;
  }
`;
export const Header = styled.header`
  height: 100px;
  position: relative;
  z-index: 1;
  border-bottom: 2px solid ${LIGHT_GRAY};

  ${tablet} {
    height: 60px;
  }

  ${Container} {
    display: flex;
    align-items: center;
    padding: 25px 20px;

    ${tablet} {
      display: none;
    }
  }
`;
