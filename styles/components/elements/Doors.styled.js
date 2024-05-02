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
  position: relative;

  @media ${device.tablet} {
    ${(props) =>
      props.$type === "modal" &&
      css`
        &:hover {
          box-shadow: inset 0px 0px 300px 200px rgba(241, 185, 13, 0.4);
        }
      `}
  }

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

export const CurrentlyEdited = styled.div`
  display: none;

  ${(props) =>
    props.$isActive &&
    css`
      width: 100%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #282828;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 4px 2px;
      text-transform: uppercase;
      font-weight: 300;
      font-size: ${props.$width <= 140
        ? `calc(${props.$width}px / 10)`
        : "14px"};
    `}

  @media ${device.tablet} {
    font-weight: 500;
  }
`;
