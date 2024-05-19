import { styled } from "styled-components";

export const Space = styled.div`
  position: relative;
  background-color: #fff;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: center;
  font-size: 0.7em;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px inset,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
`;

export const Line = styled.div`
  height: 100%;
  margin-left: 0.3em;
  border-left: 0.13em dashed #000;
  opacity: 0.3;
`;

export const HeightText = styled.div`
  margin-left: 0.6em;
  opacity: 0.4;
`;
