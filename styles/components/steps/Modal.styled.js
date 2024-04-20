import styled, { keyframes } from "styled-components";
import { device } from "@/utils/devices";

export const FullModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden;
  box-sizing: border-box;

  @media ${device.tablet} {
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
`;

const modalPopUp = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
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
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.9);
  animation: ${modalPopUp} 0.15s ease-in-out;
  overflow-x: hidden;
  overflow-y: hidden;

  @media ${device.tablet} {
    width: calc(${(props) => props.$width} * 0.9px);
    min-width: calc(${(props) => props.$width} * 0.9px);
    height: calc(${(props) => props.$height} * 0.9px);
    min-height: calc(${(props) => props.$height} * 0.9px);

    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
  }
`;

export const TopBar = styled.div`
  width: 100%;
  position: sticky;
  top: -2px;
  left: 0;
  opacity: 1;
  z-index: 10;
  display: flex;
  justify-content: end;
`;

export const CloseModal = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  text-align: right;
  font-weight: 300;
  font-size: 16px;
  line-height: 3rem;
  margin-bottom: -1px;
  position: relative;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Button = styled.div`
  width: auto;
  appearance: button;
  backface-visibility: hidden;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  height: 44px;
  line-height: 1.15;
  outline: none;
  padding: 0 25px;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  touch-action: manipulation;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  text-transform: capitalize;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    transform: skewX(-1deg) scale(1.02);
    filter: brightness(1.01);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;

export const SaveButton = styled(Button)`
  color: #fff;
  background-color: var(--main-color);
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
`;

export const CloseButton = styled(Button)`
  color: var(--font-color);
  background-color: #fff;
`;
