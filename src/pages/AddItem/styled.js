import styled from 'styled-components';
import { LIGHT_GRAY, tablet } from '../../constants/variables';
import { motion } from 'framer-motion';
import { Label } from "../../components/ui/Textarea/styled";
export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
  button {
    flex-grow: 1;
  }
`;
export const AddItemWrapper = styled(motion.section)`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 35px;
  ${tablet} {
    grid-template-columns: 1fr;
  }
`;
export const LeftSection = styled.section`
  position: relative;
  max-height: 786px;
`;
export const RightSection = styled.section`
  gap: 20px;
  display: flex;
  overflow: hidden;
  max-height: 786px;
  flex-direction: column;
  border-left: 2px solid ${LIGHT_GRAY};
  padding-left: 16px;
  ${Label}{
    flex-grow: 1;
  }
  h4 {
    margin-bottom: 48px;
  }
  ${tablet} {
    border-left: unset;
    padding-left: 0px;
  }
`;
