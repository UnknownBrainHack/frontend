import styled from 'styled-components';
import { LIGHT_GRAY } from '../../constants/variables';
export const ButtonsWrapper = styled.div`
  display: flex;
`;
export const LeftSection = styled.section``;
export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  border-left: 2px solid ${LIGHT_GRAY};
`;
