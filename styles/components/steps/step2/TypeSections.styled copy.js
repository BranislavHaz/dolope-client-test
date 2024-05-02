import styled, { css } from "styled-components";
import { device } from "@/utils/devices";
import { SelectElement } from "../ui/SelectElement.styled";

export const Wrap = styled.div`
  padding-top: var(--filter-box-h);

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
    animation: var(--blob-animation);
  }
`;

export const TypeSectionsWrap = styled.div`
  width: 90%;
  padding-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 1em;
  column-gap: 1em;

  @media ${device.tablet} {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const SectionType = styled(SelectElement)`
  width: 24vw;
  height: 30vh;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--select-active-shadow);
    `}

  @media ${device.tablet} {
    max-width: 120px;
    width: 100%;
    max-height: 300px;
    height: 100%;
  }
`;