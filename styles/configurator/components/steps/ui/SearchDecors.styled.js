import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const SearchWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  position: relative;

  @media ${device.tablet} {
    width: 50%;
  }
`;

export const InputWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

export const SearchInput = styled.input.attrs({ type: "text" })`
  width: 90%;
  height: 3rem;
  text-align: left;
  padding-left: 1.5rem;
  border: 1px solid;
  border-color: ${(props) =>
    props.$isError ? "var(--warning-color)" : "var(--border-input-default)"};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 0.5px;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-right: none;

  &:focus,
  &:active {
    outline-color: ${(props) =>
      props.$isError ? "var(--warning-color)" : "var(--border-input-default)"};
  }
`;

export const SearchIcon = styled.div`
  width: 20%;
  height: 3rem;
  background-color: var(--bg-button);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.35 ease-in-out;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const SearchErrorText = styled.div`
  width: 100%;
  margin-top: 0.2rem;
  height: 1em;
  font-size: 0.9em;
  text-align: right;
  color: var(--font-color-error);
  opacity: ${(props) => (props.$isError ? 1 : 0)};
`;
