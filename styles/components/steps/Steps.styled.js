import styled from "styled-components";

export const StepWrapper = styled.div`
  padding-bottom: 4.5em;
`;

export const Title = styled.h2`
  position: relative;
  margin: 2em 0 1.5em 0;
  padding-left: 0.35em;
  font-size: 1em;
  font-weight: 200;

  &::before {
    content: "";
    width: 0.2em;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--main-color);
  }
`;
