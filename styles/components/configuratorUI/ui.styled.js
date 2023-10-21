import styled from "styled-components";

export const Title = styled.h2`
  position: relative;
  margin: 0 0 1em 0;
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
