import styled from 'styled-components';
import { LIGHT_GRAY } from '../../../constants/variables';
import { Container } from '../../ui/styled';

export const Header = styled.header`
  height: 100px;
  border-bottom: 2px solid ${LIGHT_GRAY};
  ${Container} {
    display: flex;
    align-items: center;
    padding: 25px 20px;
  }
`;
