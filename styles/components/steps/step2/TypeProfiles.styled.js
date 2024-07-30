import styled, { css } from "styled-components";
import { device } from "@/utils/configurator/devices";
import { SelectElement } from "../ui/SelectElement.styled";

export const Wrap = styled.div`
  animation: var(--blob-animation);
  width: 90%;
  max-width: 600px;
`;

export const TypeProfilesWrap = styled.div`
  padding-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 1em;
  column-gap: 1em;
  text-align: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const ProfileElement = styled(SelectElement)`
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--select-active-shadow);
    `}
`;

export const ProfileElementImg = styled.div`
  img {
    width: 100%;
    max-width: 100px;
    height: auto;
  }
`;

export const ColorProfilesWrap = styled.div`
  padding-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 1em;
  column-gap: 1em;
  text-align: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const ColorElement = styled(SelectElement)`
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--select-active-shadow);
    `}
`;

export const ColorElementImg = styled.div`
  img {
    width: 100%;
    max-width: 100px;
    height: auto;
  }
  ${(props) =>
    !props.$isAvailable &&
    css`
      filter: blur(0.4rem);
      cursor: not-allowed;
    `};
`;
