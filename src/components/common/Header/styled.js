import styled from 'styled-components';
import { LIGHT_GRAY } from '../../../constants/variables';

export const Header = styled.header`
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 25px 0;
  max-width: 1620px;
  border-bottom: 2px solid ${LIGHT_GRAY};
`;
