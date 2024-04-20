import styled from "styled-components";
import { device } from "@/utils/devices";

export const FormWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    width: 40%;
    min-width: 450px;
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
  }

  & input:active,
  & input:focus {
    border: var(--border-input-active);
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

export const Submit = styled.div`
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
  color: #fff;
  background-color: #282828;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
`;
