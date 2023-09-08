import { styled } from "styled-components";

export const Hanger = styled.div`
  background-color: #c0c0c0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;
