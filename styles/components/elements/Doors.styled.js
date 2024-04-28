import styled, { css } from "styled-components";
import { device } from "@/utils/devices";

export const Doors = styled.div`
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  position: relative;
  left: ${(props) => props.$positionLeft}px;
  bottom: 0;

  ${(props) =>
    props.$type === "modal" &&
    css`
      transform: scale(0.8);
      margin: 5rem 0 1rem 0;

      @media ${device.tablet} {
        margin: 3rem 0 1rem 0;
      }
    `}
`;

export const DoorWrapper = styled.div`
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
  border: 0.25px solid #000;
  cursor: ${(props) => (props.$type === "modal" ? "pointer" : "auto")};

  @media ${device.tablet} {
    ${(props) =>
      props.$type === "modal" &&
      css`
        &:hover {
          filter: grayscale(80%);
        }
      `}
  }

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};

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
