import styled, { css } from "styled-components";
import { device } from "@/utils/devices";

export const Footer = styled.footer`
  width: 100%;
  height: var(--m-footer-height);
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  font-size: 0.8em;
  text-transform: uppercase;
  background-color: var(--bg-color-config);
  border-top: 1px solid rgba(235, 235, 235, 0.75);
  z-index: 1;
  font-size: 14px;

  @media ${device.tablet} {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const BackButton = styled.div`
  min-width: 30%;
  min-height: 3em;
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 9px;
  background-color: #fff;
  color: #000;
  font-size: 0.8em;
  opacity: ${(props) => (props.$isActive ? "1" : "0")};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};

  &::before {
    content: "<";
    margin-right: 0.3em;
  }
`;

export const NextButton = styled.div`
  min-width: 30%;
  min-height: 3em;
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 9px;
  font-size: 0.8em;
  background-color: var(--main-color);
  border-color: var(--main-color);
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  cursor: ${(props) => (props.$isActive ? "pointer" : "not-allowed")};

  ${(props) =>
    props.$isActive ||
    css`
      opacity: 0.5;
      filter: blur(2px);
      cursor: not-allowed;
      pointer-events: none;
    `}

  &::after {
    content: ">";
    margin-left: 0.3em;
  }
`;
