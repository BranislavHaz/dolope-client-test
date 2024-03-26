import styled, { css } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DecorsWrap = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.3em;
  row-gap: 0.2em;
  margin-top: 1em;
`;

export const DecorWrap = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: var(--border-input-default);
  border-radius: 10px;
  margin: 1em 0.2em;

  ${(props) =>
    props.$isActive &&
    css`
      background-color: var(--main-color);
    `}
`;

export const DecorImage = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;
  /*   img {
    width: 100%;
    height: auto;
  } */
`;

export const DecorTitle = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.1rem;
  font-size: 0.8rem;
  font-weight: 200;
  text-align: center;
`;
