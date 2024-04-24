import styled, { css } from "styled-components";
import { device } from "@/utils/devices";
import { SelectElement } from "../ui/SelectElement.styled";

export const FullWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: var(--blob-animation);
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: 70%;
    align-items: center;
  }
`;

export const TypesWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5em;
  row-gap: 0.5em;
  cursor: pointer;

  @media ${device.tablet} {
    max-width: 650px;
    column-gap: 1.2em;
    row-gap: 1.2em;
  }
`;

export const TypeImage = styled(SelectElement)`
  max-width: 100%;
  padding: 0.8em !important;
  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--select-active-shadow);
    `}

  & img {
    width: 100%;
    height: auto;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 200;
  font-size: 14px;
  margin-bottom: 1em;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;
