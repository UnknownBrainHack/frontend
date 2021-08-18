import styled from 'styled-components';
import { SHADOW_BIG, mobile } from '../../../constants/variables';

export const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.25);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  ${mobile}{
    
  }
`;
export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 32px 64px;
  box-shadow: ${SHADOW_BIG()};
  border-radius: 16px;
  transform: translate(-50%,-50%);

  ${mobile}{
    top: unset;
    bottom: 0;
    left: 0;
    right: 0;
    transform: unset;
    border-radius: 16px 16px 0 0;
    padding: 32px 16px;
  }
`;
export const ModalHeader = styled.h3``;
export const ModalBody = styled.div``;
