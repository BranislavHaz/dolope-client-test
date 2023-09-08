import { styled } from "styled-components";

export const Space = styled.div`
  background-color: #fff;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: center;
  font-size: 0.7em;
`;

export const Line = styled.div`
  height: 100%;
  margin-left: 1em;
  border-left: 0.13em dashed #000;
  opacity: 0.3;
`;

export const HeightText = styled.div`
  margin-left: 0.6em;
  opacity: 0.4;
`;
