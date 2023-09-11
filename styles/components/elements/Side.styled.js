import { styled } from "styled-components";

export const Side = styled.div`
  position: ${(props) => (props.$isABar ? "absolute" : "relative")};
  ${(props) => (props.$location === "left" ? "left: 0" : "right: 0")};
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-color: #eb5e8d;
  border: 1px solid #000;
`;
