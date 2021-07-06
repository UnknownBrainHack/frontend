import styled from 'styled-components';
import { motion } from 'framer-motion';
export const StyledProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
`;
