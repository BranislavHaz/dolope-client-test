import { styled } from "styled-components";

export const Side = styled.div`
  position: absolute;
  ${(props) => (props.$location === "left" ? "left: 0" : "right: 0")};
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  border: 1px solid #000;

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;
