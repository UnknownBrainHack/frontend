import styled from "styled-components";

export const SmallImage = styled.img`
  width: auto;
  height: 100%;
`;

export const BaseImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ZoomedImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: none;
  background-color: white;
  background-image: url(${props => props.src});
  background-size: 200%;
  pointer-events: none;
`;
export const ZoomImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #EFEFEF;
  border-radius: 10px;
  overflow: hidden;
  display: block;
  img {
    object-fit: contain;
  }
`;
