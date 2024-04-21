import styled, { css, keyframes } from "styled-components";

const arrivalElement = keyframes`
 from {
    transform: scale(0.9) skew(2deg) rotateX(1deg);
    opacity: 0;
    visibility: hidden;
  }
  to {
    transform: scale(1) skew(0deg) rotateX(0deg);
    opacity: 1;
    visibility: visible;
  }
`;

const blobber = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

export const SelectBoxWrap = styled.div`
  visibility: hidden;
  width: 100%;
  height: 4em;
  margin-bottom: 1em;
  padding: 1em 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: var(--bg-color-select-box);
  box-shadow: 0 0 6px 1px rgba(199, 199, 199, 0.25);
  border-radius: var(--border-radius);
  cursor: pointer;

  font-family: var(--font-family);
  color: var(--font-color);
  //animation: ${arrivalElement} 0.25s ease-in forwards;
  //animation-delay: ${(props) => props.$delayAnimation}s;
  transition: all 150ms ease-in-out;
  ${(props) => {
    return props.$isAnime
      ? css`
          animation: ${blobber} 0.25s linear none forwards;
        `
      : css`
          animation: ${arrivalElement} 0.25s ease-in forwards;
          animation-delay: ${props.$delayAnimation}s;
        `;
  }}

  ${(props) =>
    props.$isInactive &&
    css`
      filter: blur(4px);
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${(props) =>
    props.$isActive &&
    css`
      scale: 1.01;
      background-color: #fff;
    `}

  &:hover {
    scale: 1.01;
    box-shadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px";
    background-color: #fff;
  }
`;

export const Icon = styled.div`
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) =>
    props.$isActive ? "var(--main-color)" : "var(--bg-color-select-box-icon)"};

  border-radius: var(--border-radius);
`;

const showAccept = keyframes`
 0% {
    transform: scale(0) skew(2deg) rotateX(-25deg);
    opacity: 0;
    visibility: hidden;
  }
  50% {
    transform: scale(2) skew(2deg) rotateX(25deg);
    opacity: 1;
    visibility: visible;
  }
  100% {
    transform: scale(1) skew(0deg) rotateX(0deg);
    opacity: 1;
    visibility: visible;
  }
`;

export const AcceptIcon = styled.span`
  display: ${(props) => (props.$isAccept ? "block" : "none")};
  width: 1em;
  height: 1em;
  position: absolute;
  top: -0.3em;
  right: -0.2em;
  transition: all 0.5s ease-in;
  animation: ${showAccept} 0.25s ease-in forwards;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

export const ArrowWrap = styled.div`
  width: 3em;
  height: 3em;
  margin-left: auto;
  display: flex;
  justify-content: end;
  align-items: center;
`;
