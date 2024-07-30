import styled, { css } from "styled-components";
import { device } from "@/utils/configurator/devices";
import { SelectElement } from "../ui/SelectElement.styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: start;
  margin-bottom: auto;
  transition: all 0.25s ease-in-out;
  opacity: ${(props) => (props.$isScrollEnd ? 1 : 0)};

  padding-top: ${(props) => (props.$isUsed || props.$isDoors ? 0 : "1rem")};

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

  ${(props) =>
    props.$isEmpty &&
    css`
      grid-template-columns: 1fr;
      justify-content: stretch;

      @media ${device.tablet} {
        grid-template-columns: 1fr;
        justify-contenstretcht
      }
    `}
`;

export const DecorWrap = styled(SelectElement)`
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: var(--select-active-shadow);
    `}

  @media ${device.tablet} {
    height: 18rem;
  }
`;

export const PriceLabelWrap = styled.div`
  width: 85px;
  height: 30px;
  position: absolute;
  top: 0.6rem;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 0.8rem;
  font-weight: 500;
  border: 2px solid;
  border-radius: 5px;
  background-color: #fff;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  ${(props) => {
    if (props.$priceLevel === 1) {
      return css`
        background-color: green;
        border-color: green;
      `;
    }
    if (props.$priceLevel === 2) {
      return css`
        background-color: yellow;
        border-color: yellow;
        color: #000;
      `;
    }
    if (props.$priceLevel === 3) {
      return css`
        background-color: red;
        border-color: red;
      `;
    }
  }}
`;

export const DecorImage = styled.div`
  position: relative;
  width: 100%;
  height: 10rem;

  @media ${device.tablet} {
    height: 14rem;
  }
`;

export const DecorTitle = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  font-size: 0.8rem;
  font-weight: 200;
  text-align: center;
`;

export const EmptyResult = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
