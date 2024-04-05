import styled, { css } from "styled-components";

export const DoorWrapper = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

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
  background-image: ${(props) =>
    props.$bgImg ? `url(${props.$bgImg})` : "none"};

  &::before {
    content: "";
    width: ${(props) => props.$width}px;
    height: ${(props) => props.$height}px;
    position: absolute;
    top: 0;
    left: 0;

    ${(props) =>
      props.$isActive &&
      css`
        background-color: var(--main-color);
        opacity: 0.55;
      `}
  }
`;

export const HProfile = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  position: absolute;
  bottom: ${(props) => `calc(${props.$height / -2}px)`};
  ${(props) =>
    props.$isTop &&
    css`
      top: 0;
    `}
  left: 0;
  background-color: silver;
  border: 1px solid #000;
  z-index: 10;
`;
