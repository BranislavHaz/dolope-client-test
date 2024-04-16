import styled from "styled-components";

export const Handle = styled.div`
  width: ${(props) => props.$width}px;
  height: 100%;
  background-color: ${(props) =>
    props.$profileColor !== "unfilled"
      ? `var(--profile-color-${props.$profileColor})`
      : "#c0c0c0"};
  border-left: ${(props) => (props.$isFirst ? "none" : "0.25px solid #000")};
  border-right: ${(props) => (props.$isLast ? "none" : "0.25px solid #000")};
`;
