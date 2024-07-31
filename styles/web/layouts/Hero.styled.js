import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const Hero = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  background-color: var(--bg-color-view);

  @media ${device.laptop} {
    margin-top: 4rem;
  }
`;

export const HeroContent = styled.div`
  width: 90%;
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const HeroImgDevice = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 2rem;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  text-align: left;

  @media ${device.laptop} {
    width: 40%;
    height: 100%;
    margin-top: 0;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .active {
    opacity: 1;
  }

  .device {
    z-index: 2;
  }

  .image {
    z-index: 1;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    width: 60%;
    padding: 2rem 0;
    padding-left: 2rem;
    align-items: start;
  }
`;

export const Label = styled.div`
  color: var(--main-color);
`;

export const LabelText = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid var(--main-color);
  border-radius: 15px;
`;

export const Title = styled.div`
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -2px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 4rem;
    line-height: 4rem;
    text-align: left;
  }

  @media ${device.laptopL} {
    font-size: 6rem;
    line-height: 6rem;
    text-align: left;
  }
`;

export const Underline = styled.span`
  text-decoration: underline;
  text-decoration-color: var(--main-color);
`;

export const Description = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-align: center;

  @media ${device.laptop} {
    font-size: 1.2rem;
    text-align: left;
  }

  @media ${device.laptopL} {
    font-size: 1.6rem;
    text-align: left;
  }
`;

export const ActionButton = styled.div`
  margin-top: 2rem;
`;

export const ButtonText = styled.div`
  display: inline-block;
  padding: 0.8rem 1rem;
  background-color: var(--main-color);
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.25s ease-in-out;

  @media ${device.laptop} {
    padding: 1rem 1.2rem;
  }

  @media ${device.laptopL} {
    padding: 1.2rem 1.5rem;
  }

  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
    transform: scale(1.03);
  }
`;
