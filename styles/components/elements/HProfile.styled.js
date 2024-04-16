import styled from "styled-components";

export const HProfile = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  position: absolute;
  bottom: calc(${(props) => props.$height} / -2) px;
  left: 0;
  background-color: ${(props) =>
    props.$profileColor !== "unfilled"
      ? `var(--profile-color-${props.$profileColor})`
      : "#c0c0c0"};
  border-top: 0.25px solid #000;
  border-bottom: 0.25px solid #000;
  z-index: 10;
`;
