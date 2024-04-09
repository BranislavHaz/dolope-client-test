import { styled } from "styled-components";

export const Shelf = styled.div`
  border-top: ${(props) => (props.$isInModal ? "none" : "1px solid #000")};
  border-bottom: ${(props) => (props.$isInModal ? "none" : "1px solid #000")};
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;
