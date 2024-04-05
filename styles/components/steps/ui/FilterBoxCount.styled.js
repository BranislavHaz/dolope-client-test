import styled from "styled-components";

export const FilterBoxWrap = styled.div`
  width: 100%;
  height: 3em;
  padding: 2em 0 2em 1em;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
`;

export const FilterElement = styled.div`
  padding: 0.5em;
  border: var(--border-input-default);
  border-radius: var(--border-radius);
  background-color: ${(props) =>
    props.$isActive ? "var(--bg-input-active)" : "var(--bg-input)"};
  color: ${(props) =>
    props.$isActive ? "var(--font-color-active)" : "var(--font-color)"};
  white-space: nowrap;

  &:not(:last-of-type) {
    margin-right: 0.5em;
  }
`;
