import styled from "styled-components";

export const SearchWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  position: relative;
`;

export const SearchInput = styled.input.attrs({ type: "text" })`
  width: 100%;
  text-align: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.$isError ? "var(--warning-color)" : "var(--border-input-default)"};
  border-radius: 10px;
  line-height: 3rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 0.5px;
  box-sizing: border-box;
  position: relative;

  &:focus,
  &:active {
    outline-color: ${(props) =>
      props.$isError ? "var(--warning-color)" : "var(--border-input-default)"};
  }
`;

export const SearchIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--bg-button);
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.35 ease-in-out;

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
