import { styled } from "styled-components";

export const Shelf = styled.div`
  background-color: #eb5e8d;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;
