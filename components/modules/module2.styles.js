import { styled } from "styled-components";

export const Shelf = styled.div``;
export const Space = styled.div``;

export const Module2 = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-color: #eb5e8d;
  display: flex;
  flex-direction: column;

  ${Shelf} {
    width: ${(props) => props.$width}px;
    height: ${(props) => props.$thickness}px;
    background-color: #9fc9c9;
  }

  ${Space} {
    width: ${(props) => props.$width}px;
    height: ${(props) => props.$spaceSize}px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }
`;
