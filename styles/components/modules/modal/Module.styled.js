import styled from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 3px auto 3px;
  grid-template-rows: 1fr;
  height: 100%;
`;

export const ModuleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Stand = styled.div`
  height: 100%;
  background-color: #282828;
`;

export const Self = styled.div`
  width: 100%;
  height: 3px;
  background-color: #282828;
`;

export const SpaceLine = styled.div`
  margin-left: 0.3em;
  margin-right: 0.2em;
  border-left: 0.13em dashed #000;
  opacity: 0.4;
  z-index: -1;
`;

export const Space = styled.div`
  width: 100%;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  position: relative;
  z-index: -1;
  ${(props) => props.$isVariable && "justify-content: center"};

  ${SpaceLine} {
    height: ${(props) => props.$height}px;
  }
`;

export const VariableSpace = styled.div`
  width: 100%;
  height: ${(props) => props.$height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Hanger = styled.div`
  width: 100%;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  position: relative; /* Pridané pre umiestnenie vodorovnej čiary */

  ${SpaceLine} {
    height: ${(props) => props.$height}px;
  }

  &::before {
    content: ""; /* Dôležité pre zobrazenie pseudoelementu */
    position: absolute;
    top: 1em; /* 1em od vrchu */
    left: 0;
    width: 100%; /* Šírka čiary */
    height: 2px; /* Výška čiary */
    background-color: grey; /* Farba čiary */
  }
`;

export const VariableHanger = styled.div`
  width: 100%;
  height: ${(props) => props.$height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: ""; /* Dôležité pre zobrazenie pseudoelementu */
    position: absolute;
    top: 1em; /* 1em od vrchu */
    left: 0;
    width: 100%; /* Šírka čiary */
    height: 2px; /* Výška čiary */
    background-color: grey; /* Farba čiary */
  }
`;

export const Drawers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Drawer = styled.div`
  width: 100%;
  height: ${(props) => props.$height}px;
  border: 2px solid #fff;
  background-color: #000;

  &:not(:last-of-type) {
    border-bottom: none;
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
