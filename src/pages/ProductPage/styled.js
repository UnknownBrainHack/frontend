import styled from 'styled-components';
import { mobile } from '../../constants/variables';
export const ActionButton = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  button{
    height: auto;
    flex: 1 1 50%;
  }
  ${mobile}{
    justify-content: center;
    /* flex-wrap: wrap; */
    button{
      height: auto;
      padding: 14px;
      margin: 0px;
    }
  }
`
export const Description = styled.p`
  max-width: 940px;
  margin-bottom: 30px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;
export const InfoBlock = styled.div``;
