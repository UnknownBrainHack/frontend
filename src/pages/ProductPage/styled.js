import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mobile, tablet } from '../../constants/variables';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;
export const ProductPageWrapper = styled(motion.section)`
  margin-top: 48px;
  @include phone-size {
    display: block;
  }
`;
export const ProductPageTopContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 35px;
  ${tablet} {
    grid-template-columns: 1fr;
  }
`;
export const ActionButton = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  button {
    height: auto;
    flex: 1 1 50%;
  }
  ${mobile} {
    justify-content: center;
    button {
      height: auto;
      padding: 14px;
      margin: 0;
    }
  }
`;
export const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 35px;
  ${tablet} {
    grid-template-columns: 1fr;
  }
`;
export const Description = styled.p`
  max-width: 940px;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
export const InfoBlock = styled.div``;
