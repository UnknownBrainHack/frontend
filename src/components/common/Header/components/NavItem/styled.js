import styled, { css } from 'styled-components';
import { BLACK, BLUE, GRAY, tablet, TRANSITION } from "../../../../../constants/variables";

export const FrontLink = styled.a`
  color: ${GRAY};
  transition: ${TRANSITION};
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  display: inline-block;
  padding:  9px 16px;
  &:hover{
    color: ${BLACK};
  }
  ${p=>p.active && css`
    color: ${BLUE};
  `}
  
  ${tablet}{
  }
`;
