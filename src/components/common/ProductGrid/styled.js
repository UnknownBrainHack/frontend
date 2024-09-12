import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BLACK, laptop, mobile, tablet } from "../../../constants/variables";
export const StyledProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  ${laptop}{
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${tablet}{
    grid-template-columns: 1fr 1fr;
  }
  ${mobile}{
    grid-template-columns: 1fr;
  }
`;

export const SubTitle = styled.h3`
  margin-top: 64px;
  margin-bottom: 16px;
  color: ${BLACK};
`;
