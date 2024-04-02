import styled, { keyframes } from "styled-components";
import { device } from "@/utils/devices";

export const Overlay = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: ${(props) => (props.$isActive ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(201, 201, 201, 0.52);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  z-index: ${(props) => (props.$isActive ? 99 : 0)};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    z-index: 0;
  }

  to {
    opacity: 1;
    z-index: 100;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    z-index: 100;
  }

  to {
    opacity: 0;
    z-index: 0;
  }
`;

export const ModalWrap = styled.div`
  width: calc(${(props) => props.$width} * 0.95px);
  height: calc(${(props) => props.$height} * 0.95px);
  min-height: calc(${(props) => props.$height} * 0.95px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  z-index: ${(props) => (props.$isActive ? 100 : 0)};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
  transition: all 0.25s ease-out;
  animation: ${(props) => (props.$isActive ? fadeIn : fadeOut)} 0.5s ease-out
    forwards;

  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  z-index: 1;

  @media ${device.tablet} {
    width: calc(${(props) => props.$width} * 0.9px);
    height: calc(${(props) => props.$height} * 0.9px);
    min-height: calc(${(props) => props.$height} * 0.9px);
  }
`;

export const TopBar = styled.div`
  width: 100%;
  position: sticky;
  top: -2px;
  left: 0;
  opacity: 1;
  z-index: 10;
`;

export const CloseModal = styled.div`
  width: 100%;
  height: 3.2rem;
  text-align: right;
  font-weight: 300;
  font-size: 16px;
  line-height: 3rem;
  margin-bottom: -1px;
  position: relative;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  text-transform: uppercase;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--bg-input-icon);
  cursor: pointer;

  &::before {
    content: "x";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    opacity: 0.8;
  }
`;
