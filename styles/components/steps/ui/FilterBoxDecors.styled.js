import styled, { keyframes } from "styled-components";

export const FilterBoxWrap = styled.div`
  width: 100%;
  position: sticky;
  top: calc(3rem + 1px);
  left: 0;
  background-color: #fff;
  backdrop-filter: blur(4px);
  z-index: 11;
  border-top: 1px solid;
  border-color: var(--border-input-default);
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const BoxHeader = styled.div`
  min-height: 3em;
  padding: 0.5em 0 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.02) 0px 4px 6px -2px;
`;

export const IconWrap = styled.div`
  line-height: 1em;
`;

export const Title = styled.div`
  line-height: 1em;
  margin-left: 0.3rem;
`;

export const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5em 0;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const SearchWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Search = styled.input.attrs({ type: "text" })`
  width: 100%;
  text-align: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.$isError ? "var(--warning-color)" : "var(--border-input-default)"};
  border-radius: 10px;
  line-height: 2.5em;
`;

export const SearchErrorText = styled.div`
  margin-top: 0.1em;
  height: 1em;
  font-size: 0.9em;
  text-align: right;
  color: var(--font-color-error);
`;

export const SelectBoxWrap = styled.div`
  width: 90%;
  padding-top: 0.5em;

  &:not(:first-of-type) {
    padding-top: 1em;
  }
`;

export const SelectBoxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const SelectoBoxTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 0.3em;
`;

export const SelectBox = styled.span`
  padding: 0.5em 1em;
  font-size: 0.9rem;
  border: var(--border-select);
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isActive
      ? "var(--bg-color-select-box-icon)"
      : "var(--bg-color-select-box)"};

  color: ${(props) =>
    props.$isActive ? "var(--font-color-active)" : "var(--font-color)"};
`;

export const SubmitWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const SubmitButton = styled.span`
  min-width: 30%;
  min-height: 3em;
  margin-top: 2em;
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  background-color: var(--bg-button);
  color: var(--font-color-active);
  border-radius: 9px;
`;
