import styled from "styled-components";
import { device } from "@/utils/devices";

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
`;
