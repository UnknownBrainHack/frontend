import styled from 'styled-components';
import { mobile } from '../../../constants/variables';

export const Main = styled.main`
  padding: 0 0 40px;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
  z-index: 0;
  ${mobile} {
    padding: 0 0 40px;
  }
`;
