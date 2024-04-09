import styled from "styled-components";

export const Stand = styled.div`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-left: ${(props) =>
    props.$location === "left" ? "none" : "1px solid #000"};
  border-right: ${(props) =>
    props.$location === "right" ? "none" : "1px solid #000"};
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;
