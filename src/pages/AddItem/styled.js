import styled from 'styled-components';
import { LIGHT_GRAY, tablet } from '../../constants/variables';
import { motion } from 'framer-motion';
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  button {
    flex-grow: 1;
  }
`;
export const AddItemWrapper = styled(motion.section)`
  margin-top: 48px;
  @include phone-size {
    display: block;
  }
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 35px;
  ${tablet} {
    grid-template-columns: 1fr;
  }
`;
export const LeftSection = styled.section``;
export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  border-left: 2px solid ${LIGHT_GRAY};
  padding-left: 16px;
  h4 {
    margin-bottom: 48px;
  }
  ${tablet} {
    border-left: unset;
    padding-left: 0px;
  }
`;
