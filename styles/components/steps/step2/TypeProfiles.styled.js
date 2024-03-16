import styled, { css } from "styled-components";

export const Wrap = styled.div``;

export const TypeProfilesWrap = styled.div`
  width: 90%;
  padding-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 1em;
  column-gap: 1em;
`;

export const ProfileElement = styled.div`
  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--main-color) 0px 0px 0px 3px;
    `}
`;

export const ColorProfilesWrap = styled.div`
  width: 90%;
  padding-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 1em;
  column-gap: 1em;
`;

export const ColorElement = styled.div`
  opacity: ${(props) => (props.$isAvailable ? 1 : 0.1)};
`;
