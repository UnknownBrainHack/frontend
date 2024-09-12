import styled from 'styled-components';
import { LIGHT_GRAY } from "../../../constants/variables";

export const DropZoneInput = styled.input`
  & + div {
    pointer-events: none;
  }
`;
export const DropZoneWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  img{
    object-fit: cover;
  }
  p {
    margin: 20px 0;
    color: $gray-3;
    font-size: 48px;
    font-weight: bold;
  }
`;
export const DropZone = styled.div`
  background: ${LIGHT_GRAY};
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;
