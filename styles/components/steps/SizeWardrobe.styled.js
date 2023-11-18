import styled from "styled-components";

export const FormWrap = styled.div`
  width: 80%;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Submit = styled.div`
  margin: 1em 0;
  padding: 1em 2em;
  background-color: var(--bg-button);
  border: 0;
  border-radius: var(--border-radius);
  font-size: 14px;
  color: #fff;
`;
