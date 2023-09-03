import { styled } from "styled-components";

export const Space = styled.div`
  background-color: #eb5e8d;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  font-size: 0.7em;
`;
