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

export const SectionType = styled(SelectElement)`
  display: ${(props) => (props.$isAllowed ? "block" : "none")};
  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--select-active-shadow);
    `}
`;

export const TypeSectionsWrap = styled.div`
  width: 95%;
  padding-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 0.6rem;
  column-gap: 0.6rem;

  @media ${device.tablet} {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  ${SectionType} {
    width: ${(props) => props.$sectionWidth}px;
    height: auto;
    cursor: pointer;
  }
`;
