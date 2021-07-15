import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import {
  BLACK,
  WHITE,
  BLUE,
  TRANSITION,
  tablet,
  scrollbar, rgba, BORDER_NORMAL,
} from "../../../constants/variables";

export const Wrapper = styled.div`
  flex-direction: column;
  display: ${props => (props.simple ? "inline-flex" : "flex")};
  user-select: none;
`;

export const Title = styled.div`
  padding-left: 20px;
  color: ${rgba(BLACK, 0.3)};
  font-size: 14px;
  line-height: 25px;

  ${tablet}{
    padding-left: 30px;
  }
`;

export const Input = styled.button`
  width: 100%;
  height: 46px;
  border: 2px solid #efefef;
  border-radius: ${BORDER_NORMAL};
  outline: none;
  transition: ${TRANSITION};
  text-align: left;
  padding: 12px 100px 12px 18px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  transition: ${TRANSITION};
  user-select: none;
  outline: none;
  appearance: none;
  
  ${p=>p.opened && css`
    border: 2px solid ${BLUE};
  `}

  ${props =>
    props.simple &&
    `
      width: auto;
      padding: 0 24px 0 0;
      border: none;
      border-radius: 0;
      
      &:not(:disabled):hover {
        color: ${BLUE};
    
        & + svg path {
          stroke: ${BLUE};
        }
      }
    `}
  
  ${props =>
    props.simple && css`
      ${tablet}{
        padding: 0 20px 0 0;
      }
    `}

  ${props =>
    props.big &&
    tablet`
    padding: 15px 51px 19px 29px;
    font-size: 16px;
    line-height: 25px;
  `}
  
  &:disabled {
    color: ${rgba(BLACK, 0.3)};
    cursor: default;

    & + svg path {
      stroke: #c4c4c4;
    }
  }
`;

Input.propTypes = {
  opened: PropTypes.bool,
  simple: PropTypes.bool,
  big: PropTypes.bool,
};

export const Inner = styled.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    top: 50%;
    right: 20px;
    user-select: none;
    z-index: -1;
    transition: ${TRANSITION};
    transform: translateY(-50%);

    path {
      transition: ${TRANSITION};
      stroke: ${BLACK};
    }
  }

  ${props =>
    props.big &&
    tablet`
    svg {
      right: 29px;
    } 
  `}

  ${props =>
    props.opened &&
    `
    svg {
      transform: translateY(-50%) rotate(180deg);
    }
  `}

  ${props =>
    props.simple &&
    `
    width: auto;

    svg {
      right: 0;
      height: 8px;

      path {
        stroke-width: 1.5;
      }
    } 
  `}
`;

export const List = styled.ul`
  position: absolute;
  border: 2px solid ${BLUE};
  top: calc(100% + 8px);
  left: 0;
  z-index: 1;
  display: none;
  width: 100%;
  margin: 0;
  padding: 0;
  background: ${WHITE};
  list-style-type: none;
  border-radius: 10px;
  outline: none;

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
      left: auto;
      right: 0;
    `}

  ${props =>
    props.height &&
    `
    height: ${props.height}px;
    overflow-y: auto;
    ${scrollbar}
  `}

  ${props =>
    props.opened &&
    css`
      opacity: 1;
      transition: ${TRANSITION};
      display: block;
    `}
  
  ${props =>
    props.autoSize &&
    css`
      width: auto;
      min-width: 100%;
    `}
`;

export const ListItem = styled.li`
  padding: 10px 20px;
  color: ${BLACK};
  font-size: 16px;
  line-height: 25px;
  cursor: pointer;
  transition: ${TRANSITION};

  &:first-child {
    padding-top: 20px;
  }

  &:last-child {
    padding-bottom: 20px;
  }

  ${props =>
    props.active &&
    `
    color: ${BLUE};
  `}
`;

export const DefaultSelect = styled(Input)`
  ${props =>
    props.simple &&
    `
    width: auto;
    min-width: 100px;
  `}
`;
