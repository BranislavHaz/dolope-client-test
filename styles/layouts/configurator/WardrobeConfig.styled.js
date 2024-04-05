import styled from "styled-components";
import { device } from "@/utils/devices";

export const WardrobeConfig = styled.div`
  width: 100%;
  max-height: var(--m-wardrobe-config-height);
  display: flex;
  position: fixed;
  left: 0;
  bottom: var(--m-footer-height);
  justify-content: center;
  background-color: var(--bg-color-config);
  overflow-y: auto;

  @media ${device.tablet} {
    flex-direction: row;
    position: relative;
    max-height: var(--l-wardrobe-config-height);
  }
`;

export const ContentWrapper = styled.div`
  width: 90%;
  height: auto;
  padding-bottom: 1em;
`;
