import styled from "styled-components";

export const Doors = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => props.$positionLeft}px;
  //opacity: 0.5;
`;

export const Door = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  justify-content: space-between;

  &:not(:first-child) {
    margin-left: -${(props) => props.$overhang}px;
  }

  &:last-child {
    right: 0;
  }

  &:nth-child(odd) {
    background-color: #eb5e8d;
    z-index: 1;
  }

  &:nth-child(even) {
    background-color: #eb5e8d;
    z-index: 2;
    box-shadow: 10px 0px 8px -5px rgba(21, 21, 21, 0.18),
      -10px 0px 8px -5px rgba(21, 21, 21, 0.18);
  }
`;

export const Handle = styled.div`
  width: ${(props) => props.$width}px;
  height: 100%;
  background-color: #c0c0c0;
  border-left: ${(props) => (props.$isFirst ? "none" : "1px solid #000")};
  border-right: ${(props) => (props.$isLast ? "none" : "1px solid #000")};
`;
