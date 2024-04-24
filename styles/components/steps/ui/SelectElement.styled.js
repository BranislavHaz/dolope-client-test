import styled from "styled-components";

export const SelectElement = styled.div`
  cursor: pointer;
  box-shadow: var(--select-inactive-shadow);
  border-radius: var(--select-radius);
  padding: 5px;
  transition: all 0.1s ease-in;

  &:hover {
    transform: var(--select-tranform-hover);
  }
`;
