import { styled } from "styled-components";

export const Module = styled.div`
  ${(props) => props.$isEmpty && `width: ${props.$width}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: ${(props) =>
    props.$isInModal ? `${props.$standWidth}px solid #966f33` : "none"};
  border-right: ${(props) =>
    props.$isInModal ? `${props.$standWidth}px solid #966f33` : "none"};
`;
