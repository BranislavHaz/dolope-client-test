import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Text = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 80%;
  }
`;

export const Images = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ImageWrap = styled.div`
  width: 50%;
  height: auto;
  position: relative;
  z-index: 2;

  @media ${device.laptop} {
    width: auto;
    height: 650px;
  }

  & img {
    position: relative !important;
  }

  &:first-of-type {
    transform: rotate(-18deg) scale(0.9) translateX(8rem) translateY(4rem);
    z-index: 1;
    position: absolute;
    left: -5rem;
    width: 40%;

    @media ${device.laptop} {
      position: relative;
      transform: rotate(-18deg) scale(0.9) translateX(12rem) translateY(6rem);
    }
  }

  &:last-of-type {
    transform: rotate(18deg) scale(0.9) translateX(-8rem) translateY(4rem);
    z-index: 1;
    position: absolute;
    right: -5rem;
    width: 40%;

    @media ${device.laptop} {
      position: relative;
      transform: rotate(18deg) scale(0.9) translateX(-12rem) translateY(6rem);
    }
  }
`;
