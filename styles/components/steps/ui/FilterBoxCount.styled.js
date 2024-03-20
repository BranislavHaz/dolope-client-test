import styled from "styled-components";

export const FilterBoxWrap = styled.div`
  width: 100%;
  min-height: 3em;
  padding: 2em 0 2em 1em;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  position: sticky;
  top: 3.1rem;
  left: 0;
  background-color: #fff;
  backdrop-filter: blur(4px);
  z-index: 11;
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
