import styled from "styled-components";

export const Rail = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  position: absolute;
  left: ${(props) => props.$positionLeft}px;
  ${(props) => (props.$type === "top" ? "top: 0" : "bottom: 0")};
  z-index: 3;
  background-color: ${(props) =>
    props.$profileColor !== "unfilled"
      ? `var(--profile-color-${props.$profileColor})`
      : "#c0c0c0"};
  border-top: 0.25px solid #000;
  border-bottom: 0.25px solid #000;
`;
