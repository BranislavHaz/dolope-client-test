import styled from "styled-components";

export const Doors = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => props.$positionLeft}px;
`;

export const DoorWrapper = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  justify-content: space-between;

  &:not(:first-child) {
    margin-left: -${(props) => props.$overhang}px;
  }

  &:last-child {
    right: 0;
  }

  &:nth-child(odd) {
    z-index: 1;
  }

  &:nth-child(even) {
    z-index: 2;
    box-shadow: 10px 0px 8px -5px rgba(21, 21, 21, 0.18),
      -10px 0px 8px -5px rgba(21, 21, 21, 0.18);
  }
`;

export const Door = styled.div`
  position: absolute;
  z-index: -1;
`;

export const DoorSection = styled.div`
  position: relative;
`;

export const DoorPart = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-color: ${(props) => (props.$isEmpty ? "#fff" : "burlywood")};
`;
