import styled from "styled-components";

export const Handle = styled.div`
  width: ${(props) => props.$width}px;
  height: 100%;
  background-color: #c0c0c0;
  border-left: ${(props) => (props.$isFirst ? "none" : "1px solid #000")};
  border-right: ${(props) => (props.$isLast ? "none" : "1px solid #000")};
`;
