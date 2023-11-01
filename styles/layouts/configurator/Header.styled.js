import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: var(--m-header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
`;

export const Logo = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 1.7em;
  font-weight: 500;
`;

export const Dot = styled.span`
  font-size: 1em;
  color: var(--main-color);
`;
