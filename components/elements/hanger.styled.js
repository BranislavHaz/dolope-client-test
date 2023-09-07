import { styled } from "styled-components";

export const Hanger = styled.div`
  background-color: #c0c0c0;
  border: 1px solid #000000;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;
