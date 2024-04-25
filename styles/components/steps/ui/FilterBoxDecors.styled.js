import styled, { keyframes, css } from "styled-components";
import { device } from "@/utils/devices";

export const FilterBoxWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  z-index: 11;
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
  width: 100%;
  height: 3em;
  padding: 2em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: all 0.1s ease-in;
  cursor: pointer;

  &:hover {
    @media ${device.tablet} {
      font-weight: 500;
    }
  }
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
  padding: 1.5em 0;
  background-color: #fff;
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
  line-height: 3rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 0.5px;
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

export const SelectBox = styled.span`
  margin-right: 0.2rem;
  padding: 0.5em 1em;
  font-size: 0.9rem;
  border: var(--border-input-default);
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isActive ? "var(--bg-input-active)" : "#fff"};
  color: ${(props) =>
    props.$isActive ? "var(--font-color-active)" : "var(--font-color)"};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 0.5px;
  transition: all 0.1s ease-in;
  cursor: pointer;

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
`;

export const SubmitWrap = styled.div`
  width: 100%;
  padding: 2rem 0 0 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > :last-child {
    position: absolute;
    right: 1em;
  }
`;
