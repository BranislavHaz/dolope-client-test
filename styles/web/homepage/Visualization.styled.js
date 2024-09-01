import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-items: center;
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Text = styled.p`
  max-width: 750px;
`;

export const GalleryWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 90%;
  }
`;

export const GalleryItem = styled.div`
  width: 100%;
  height: 200px;
  display: block;
  position: relative;

  &:hover {
    opacity: 0.96;
  }

  @media ${device.tablet} {
    height: 350px;
  }
`;
