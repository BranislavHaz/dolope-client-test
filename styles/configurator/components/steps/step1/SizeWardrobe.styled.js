import styled, { keyframes, css } from "styled-components";
import { device } from "@/utils/configurator/devices";

export const FormWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: var(--blob-animation);

  @media ${device.tablet} {
    width: 40%;
    min-width: 450px;
  }
`;

const errorAnim = keyframes`
 0% {
    transform: skew(0deg) translateX(0);
  }
  25% {
    transform: skew(2deg) translateX(1em);
  }
  50% {
    transform: skew(0deg) translateX(0);
  }
  75% {
    transform: skew(-2deg) translateX(-1em);
  }
 100% {
    transform: skew(0deg) translateX(0);
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  & input {
    width: 100%;
    position: relative;
    padding: 1em 1em;
    line-height: 2em;
    border-radius: var(--border-radius);
    outline: 0;
    background-color: ${(props) =>
      props.$isCorrect ? "var(--bg-input)" : "var(--bg-input-error)"};
    border: ${(props) =>
      props.$isCorrect
        ? "var(--border-input-default)"
        : "var(--border-input-error)"};

    ${(props) =>
      props.$isCorrect ||
      css`
        animation: ${errorAnim} 0.25s ease-in forwards;
        animation-iteration-count: 2;
      `}
  }

  & input:active,
  & input:focus {
    background-color: rgba(241, 185, 13, 0.05);
    border: 1px solid var(--main-color);
  }

  &::after {
    content: "cm";
    width: 3em;
    height: 3em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.25em;
    background-color: var(--bg-input-icon);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
  }
`;

export const Details = styled.span`
  width: 100%;
  margin: 0.2em 0 1em 0;
  padding-left: 0.5em;
  font-size: 12px;
  font-weight: 300;
  color: ${(props) =>
    props.$isCorrect ? "var(--font-color)" : "var(--font-color-error)"};
`;

export const SubmitWrap = styled.div`
  display: none;
  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: end;
  }
`;
