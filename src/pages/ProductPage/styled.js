import styled from 'styled-components';
import { motion } from 'framer-motion';
import { tablet } from '../../constants/variables';

export const ActionButtons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 20px;

  ${tablet} {
    justify-content: center;

    button {
      height: auto;
      padding: 14px;
      margin: 0;
    }
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: stretch;
`;
export const ProductPageWrapper = styled(motion.section)`
  margin-top: 48px;
`;
export const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 35px;
  ${tablet} {
    grid-template-columns: 1fr;
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

