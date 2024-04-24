import styled, { css } from "styled-components";
import { device } from "@/utils/devices";
import { SelectElement } from "../ui/SelectElement.styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  animation: var(--blob-animation);

  padding-top: ${(props) =>
    props.$isUsed || props.$isDoors ? 0 : "var(--filter-box-h)"};

  @media ${device.tablet} {
    padding-top: 0;
  }
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

export const DecorWrap = styled(SelectElement)`
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
      box-shadow: var(--select-active-shadow);
    `}

  @media ${device.tablet} {
    height: 18rem;
  }
`;

export const DecorImage = styled.div`
  position: relative;
  width: 95%;
  height: 10rem;
  margin-top: 0.3rem;

  @media ${device.tablet} {
    height: 14rem;
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
