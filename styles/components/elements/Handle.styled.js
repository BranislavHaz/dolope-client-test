import styled from "styled-components";

export const Handle = styled.div`
  width: ${(props) => props.$width}px;
  height: 100%;
  background-color: ${(props) =>
    props.$profileColor !== "unfilled"
      ? `var(--profile-color-${props.$profileColor})`
      : "#c0c0c0"};
  border-left: 0.25px solid #000;
  border-right: 0.25px solid #000;
`;
