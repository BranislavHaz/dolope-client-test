import styled from "styled-components";
import { device } from "@/utils/devices";

export const LightBox = styled.div`
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;

export const LightBoxContent = styled.div`
  position: relative;
  width: 70vw;
  height: 70vw;
  display: block;

  img {
    display: block;
    margin: 0 auto;
    max-width: 70vw;
    width: auto;
    max-height: 70vw;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  @media ${device.tablet} {
    width: 70vw;
    height: 80vh;

    img {
      max-width: 70vw;
      width: auto;
      max-height: 80vh;
      height: auto;
    }
  }
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CloseIcon = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) rotate(180deg);
  }
`;
