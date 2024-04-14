import styled from "styled-components";

export const Stand = styled.div`
  border: 1px solid #000;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;
