import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const WardrobeView = styled.div`
  width: 100%;
  height: var(--m-wardrobe-view-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color-view);
  position: relative;
  z-index: 10;

  @media ${device.tablet} {
    height: var(--l-wardrobe-view-height);
  }

  & img {
    width: auto;
    height: var(--m-wardrobe-view-height);

    @media ${device.tablet} {
      width: 80%;
      max-width: 600px;
      height: auto;
    }
  }
`;
