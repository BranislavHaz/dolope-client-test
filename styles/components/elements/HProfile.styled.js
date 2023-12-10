import styled from "styled-components";

export const HProfile = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  position: absolute;
  bottom: calc(${(props) => props.$height} / -2) px;
  left: 0;
  background-color: silver;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  z-index: 10;
`;
