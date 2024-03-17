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

export const ProfileElement = styled.div``;

export const ProfileElementImg = styled.div`
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

export const ColorElement = styled.div``;

export const ColorElementImg = styled.div`
  ${(props) =>
    !props.$isAvailable &&
    css`
      filter: blur(0.3rem);
      cursor: not-allowed;
    `};

  ${(props) =>
    props.$isActive &&
    css`
      background-color: var(--main-color);
    `}
`;