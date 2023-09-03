import { styled } from "styled-components";

export const Shelf = styled.div`
  background-color: brown;
  border: 1px solid brown;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;
