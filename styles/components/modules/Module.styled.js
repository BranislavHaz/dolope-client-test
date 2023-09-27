import { styled } from "styled-components";

export const Module = styled.div`
  ${(props) => props.$isEmpty && `width: ${props.$width}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
