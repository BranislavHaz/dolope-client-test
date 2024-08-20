import styled, { css } from "styled-components";
import { device } from "@/constants/sizeDevices";
import { SelectElement } from "../ui/SelectElement.styled";

export const Wrap = styled.div`
  --fullHeight: ${(props) => props.$fullHeight};
  animation: var(--blob-animation);
  padding-top: var(--filter-box-h);

  @media ${device.tablet} {
    padding-top: 0;
  }
`;

export const TypeDoorsWrap = styled.div`
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
`;

export const DoorWrap = styled(SelectElement)`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--main-color) 0px 0px 0px 3px;
    `}
`;

export const DoorType = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  box-sizing: content-box;
  border: 2px solid #000;
  cursor: pointer;
`;

export const DoorElement = styled.div`
  width: 100%;
  //height: ${(props) => Math.ceil((100 * props.$heightRatio * 100) / 100)}%;
  height: ${(props) => props.$height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;

export const InputNum = styled.input.attrs({
  type: "number",
})`
  width: 18vw;
  padding: 1vw 0;
  text-align: center;
  font-size: 3vw;
  border: var(--border-input-default);
  background-color: ${(props) =>
    props.$isError ? "var(--bg-input-error)" : "var(--bg-input)"};

  @media ${device.tablet} {
    width: 70%;
    font-size: 0.8rem;
    padding: 0.3rem 0;
  }
`;

export const DimensionsText = styled.div`
  font-size: 3vw;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }
`;

export const LimitText = styled.div`
  padding-top: 1vw;
  font-size: 2.5vw;
  color: ${(props) =>
    props.$isError ? "var(--font-color-error)" : "var(--font-color)"};

  @media ${device.tablet} {
    padding-top: 0.4rem;
    font-size: 0.8rem;
  }
`;

export const UnitText = styled.span`
  font-size: 3vw;
`;
