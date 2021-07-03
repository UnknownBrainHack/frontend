import styled from 'styled-components';
import { CONTAINER_DESKTOP, mobile } from '../../../constants/variables';

export const Main = styled.main`
  max-width: ${CONTAINER_DESKTOP};
  padding: 0 0 40px;
  margin: 0 auto;
  ${mobile} {
    padding: 0 16px 40px;
  }
`;
