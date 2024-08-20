import styled, { keyframes, css } from "styled-components";
import { device } from "@/constants/sizeDevices";

export const FilterBoxWrap = styled.div`
  width: 100%;
  height: var(--filter-box-h);
  padding: 2em 0 2em 1em;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const activeElement = keyframes`
  0% {
    transform: scale(0);
  }

  50% {
   transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

export const FilterElement = styled.div`
  padding: 0.5em;
  border: var(--border-input-default);
  border-radius: var(--border-radius);
  background-color: ${(props) =>
    props.$isActive ? "var(--bg-input-active)" : "#fff"};
  color: ${(props) =>
    props.$isActive ? "var(--font-color-active)" : "var(--font-color)"};
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 0.5px;
  transition: all 0.1s ease-in;
  cursor: pointer;
  position: relative;

  &::after {
    opacity: ${(props) => (props.$isSelected ? 1 : 0)};
    content: "✔";
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: -0.6rem;
    right: -0.5rem;
    font-size: 1.1rem;
    color: green;
    text-shadow: 0.2px 0.2px 0 rgba(255, 255, 255, 0.6),
      -0.2px 0.2px 0 rgba(255, 255, 255, 0.6),
      0.2px -0.2px 0 rgba(255, 255, 255, 0.6),
      -0.2px -0.2px 0 rgba(255, 255, 255, 0.6);

    ${(props) =>
      props.$isSelected &&
      css`
        animation: ${activeElement} 0.15s ease-in-out;
      `}
  }

  &:hover {
    @media ${device.tablet} {
      transform: scale(1.07);
    }
  }

  ${(props) =>
    props.$isActive &&
    css`
      animation: ${activeElement} 0.15s ease-in-out;
    `}

  &:not(:last-of-type) {
    margin-right: 0.5em;
  }
`;
