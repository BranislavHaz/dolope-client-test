import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;

  & form {
    display: flex;
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 0.3em;
  padding-bottom: 1.5em;
  width: 70%;

  &:last-of-type {
    padding-bottom: 0;
  }

  & label {
    position: absolute;
    top: -0.8em;
    left: 0.5em;
    padding: 0.2em;
    font-size: 0.8em;
    color: ${(props) =>
      props.$isValid ? "rgba(128, 128, 128, 0.6)" : "var(--warning-color)"};
    background-color: #fff;
  }

  & input,
  & select {
    width: 100%;
    padding-left: 0.7em;
    border-radius: 5px;
    border: 2px solid;
    border-color: ${(props) =>
      props.$isValid ? "rgba(128, 128, 128, 0.1)" : "var(--warning-color)"};
    height: 2.8em;
  }

  & input:focus,
  & select:focus {
    outline: none;
  }

  & input:focus:not([readonly]),
  & input:active:not([readonly]),
  & select:focus:not([readonly]),
  & select:active:not([readonly]) {
    border: 2px solid
      ${(props) =>
        props.$isValid ? "rgba(128, 128, 128, 0.1)" : "var(--warning-color)"};
  }

  & input:focus,
  & input:active,
  & select:focus,
  & select:active {
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }

  & select,
  & option {
    background-color: #fff;
  }

  & option {
    cursor: pointer;
  }

  & option:hover,
  & option:focus,
  & option:active,
  & option:checked {
    background-color: var(--main-color);
    color: #fff;
  }

  & option[value="0"] {
    color: rgba(128, 128, 128, 0.6) !important;
  }

  &:last-of-type {
    span {
      bottom: -1.66em;
    }
  }

  & span {
    position: absolute;
    bottom: 0.36em;
    right: 0;
    padding: 0.2em;
    font-size: 0.8em;
    background-color: var(--warning-color);
    border-radius: 5px;
    z-index: 1;
  }
`;

export const DimensionsValue = styled.span`
  color: rgba(128, 128, 128, 0.6);
`;
