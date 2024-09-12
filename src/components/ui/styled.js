import {
  CONTAINER_DESKTOP,
  CONTAINER_TABLET,
  LAYOUT_PADDING,
  tablet,
} from '../../constants/variables';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${CONTAINER_DESKTOP};
  margin: 0 auto;
  padding: 0 ${LAYOUT_PADDING};
  ${tablet} {
    max-width: ${CONTAINER_TABLET};
    padding: 0 ${LAYOUT_PADDING};
  }
`;
