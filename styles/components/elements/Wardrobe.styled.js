import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const WardrobeWrapper = styled.div`
  width: 100%;
  height: var(--m-wardrobe-view-height);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    height: var(--l-wardrobe-view-height);
  }
`;

export const Wardrobe = styled.div`
  position: relative;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: end;
`;
