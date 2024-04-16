import { styled } from "styled-components";

export const Hanger = styled.div`
  position: absolute;
  top: 0.5em;
  left: 0;
  background-color: #c0c0c0;
  border-top: 0.25px solid #000;
  border-bottom: 0.25px solid #000;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
`;
