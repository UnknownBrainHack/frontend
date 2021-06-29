import styled, { css } from 'styled-components';
export const Input = styled.input`
  display: flex;

  ${(p) =>
    p.big &&
    css`
      height: 60px;
      font-size: 36px;
      font-weight: 700;
    `}
`;
