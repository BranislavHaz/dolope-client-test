import styled, { css } from "styled-components";
import { device } from "@/utils/devices";
import { SelectElement } from "../ui/SelectElement.styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: var(--blob-animation);
`;

export const CountSectionsWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: 60%;
  }
`;

export const SelectWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1em;
  row-gap: 1em;
`;

export const Select = styled(SelectElement)`
  padding: 0.5em 0.8em !important;
  border: var(--border-input-default);
  border-radius: var(--border-radius);
  text-align: center;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      background-color: var(--bg-input-active);
      color: var(--font-color-active);
    `}
`;

export const SelectDimension = styled.span`
  display: block;
  font-size: 12px;
`;

export const CountDoorWrap = styled.div`
  ${(props) =>
    props.$isInactive &&
    css`
      opacity: 0.5;
      filter: blur(4px);
      cursor: not-allowed;
      pointer-events: none;
    `}
`;
