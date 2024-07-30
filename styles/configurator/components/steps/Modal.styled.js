import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const FullModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 70vw;
    max-height: 100vh;
  }
`;

export const Overlay = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(201, 201, 201, 0.52);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  z-index: ${(props) => (props.$isActive ? 99 : -100)};

  @media ${device.tablet} {
    display: none;
  }
`;

export const ModalWrap = styled.div`
  width: ${(props) => props.$width}px;
  min-width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  min-height: ${(props) => props.$height}px;
  display: flex;
  z-index: 100;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.9);
  overflow-x: hidden;
  overflow-y: auto;

  @media ${device.tablet} {
    width: 70vw;
    min-width: 70vw;
    height: 100vh;
    min-height: 100vh;
    position: fixed;

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
  }
`;

export const TopBar = styled.div`
  width: 100%;
  height: 4rem;
  position: sticky;
  top: -2px;
  left: 0;
  opacity: 1;
  z-index: 10;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const CloseModal = styled.div`
  display: none;

  @media ${device.tablet} {
    width: 3rem;
    height: 3rem;
    font-weight: 300;
    position: sticky;
    top: 0;
    right: 0;
    margin: 0.5rem 0.5rem 0.5rem 0;
    border-radius: 50%;
    z-index: 105;
    cursor: pointer;
    display: block;
    background-color: #282828;

    &::after {
      content: "X";
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      width: 100%;
      height: 100%;
      transition: all 0.65s ease-out;
      position: sticky;
    }

    &:hover::after {
      transform: rotateX(180deg) rotateY(180deg);
    }
  }
`;

export const ModalFooter = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  position: sticky;
  bottom: 0;
  left: 0;
  justify-content: space-around;
  align-items: center;
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  visibility: visible;
  z-index: 10;

  @media ${device.tablet} {
    visibility: hidden;

    & div {
      visibility: hidden;
    }
  }
`;
