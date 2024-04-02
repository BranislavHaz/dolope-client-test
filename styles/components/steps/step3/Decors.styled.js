import styled, { css } from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DecorsWrap = styled.div`
  width: ${(props) => (props.$isUsed ? "95%" : "90%")};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 0.4em;
  row-gap: 1em;
  margin-top: ${(props) => (props.$isUsed ? "0" : "1em")};

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 1em;
    row-gap: 1em;
  }
`;

export const DecorWrap = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: var(--border-input-default);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      background-color: var(--main-color);
    `}

  @media ${device.tablet} {
    height: 20rem;
  }
`;

export const DecorImage = styled.div`
  position: relative;
  width: 100%;
  height: 6rem;

  @media ${device.tablet} {
    height: 15rem;
  }
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

  @media ${device.tablet} {
    justify-content: center;
  }
`;
