import styled from 'styled-components';
import { mobile } from '../../../constants/variables';

export const Main = styled.main`
  max-width: 1580px;
  padding: 0 20px 40px;
  margin: 0 auto;
  ${mobile} {
    padding: 0 16px 40px;
  }
`;
