import styled, { css } from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  --fullHeight: ${(props) => props.$fullHeight};
  animation: var(--blob-animation);
  padding-top: var(--filter-box-h);

  @media ${device.tablet} {
    padding-top: 0;
  }
`;

export const TypeDoorsWrap = styled.div`
  width: 90%;
  padding-bottom: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 1em;
  column-gap: 1em;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const DoorType = styled.div`
  width: 24vw;
  height: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  box-sizing: content-box;
  border: 2px solid #000;
  cursor: pointer;

  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--main-color) 0px 0px 0px 3px;
    `}

  @media ${device.tablet} {
    max-width: 120px;
    width: 100%;
    max-height: 300px;
    height: 100%;
  }
`;

export const DoorElement = styled.div`
  width: 23vw;
  height: ${(props) => 60 * props.$heightRatio - 1}vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;

  @media ${device.tablet} {
    max-width: 120px;
    width: 100%;
    height: ${(props) => 60 * props.$heightRatio - 1}vw;
  }
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
