import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const SearchWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
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
`;

export const SearchErrorText = styled.div`
  width: 100%;
  margin-top: 0.2rem;
  height: 1em;
  font-size: 0.9em;
  text-align: right;
  color: var(--font-color-error);
`;

export const MaterialTypeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
