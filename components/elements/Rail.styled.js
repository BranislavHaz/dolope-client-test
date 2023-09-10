import styled from "styled-components";

export const Rail = styled.div`
  //width: ${(props) => props.$width}px;
  width: calc(100% - ${(props) => props.$subtractionWidth}px);
  height: ${(props) => props.$height}px;
  position: absolute;
  left: ${(props) => props.$positionLeft}px;
  ${(props) => (props.$type === "top" ? "top: 0" : "bottom: 0")};
  z-index: 1;
  background-color: #c0c0c0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;
