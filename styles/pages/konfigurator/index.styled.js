import styled from "styled-components";
import { device } from "@/utils/devices";

export const Main = styled.main`
  width: 100%;
  height: var(--m-wardrobe-height);
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const WrapView = styled.div`
  background-color: var(--background-color);

  @media ${device.tablet} {
    position: relative;
    width: 60vw;
    height: ${(props) => `${props.$height}px`};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const WrapConfig = styled.div`
  @media ${device.tablet} {
    width: 40vw;
    height: ${(props) => `${props.$height}px`};
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--bg-color-config);
  }
`;
