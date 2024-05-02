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

  div.small-device {
    @media ${device.zero} {
      display: flex;
    }

    @media ${device.tablet} {
      display: none;
    }
  }

  & div:has(div.larger-device) {
    @media ${device.tablet} {
      width: 70vw;
    }
  }

  div.larger-device {
    @media ${device.zero} {
      display: none;
    }

    @media ${device.tablet} {
      display: flex;
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const WrapView = styled.div`
  background-color: var(--background-color);

  @media ${device.tablet} {
    position: relative;
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const WrapConfig = styled.div`
  @media ${device.tablet} {
    width: 30vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--bg-color-config);
  }
`;
