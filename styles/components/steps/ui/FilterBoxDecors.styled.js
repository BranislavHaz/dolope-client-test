import styled, { keyframes } from "styled-components";

export const FilterBoxWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 3.1rem;
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
  margin: 1.5em 0;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const Search = styled.input.attrs({ type: "text" })`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  border: 1px solid;
  border-color: var(--border-input-default);
  border-radius: 10px;
  line-height: 2.5em;
`;

export const Text = styled.div``;

export const SubmitWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.span`
  min-width: 30%;
  min-height: 3em;
  padding: 0.5em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  background-color: var(--bg-button);
  color: var(--font-color-active);
  border-radius: 9px;
`;
