import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const Benefits = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media ${device.laptop} {
    padding: 4rem;
  }
`;

export const BenefitsContent = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${device.laptop} {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export const Benefit = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 1.6rem;
  row-gap: 0.6rem;
  align-items: center;
  position: relative;

  @media ${device.laptop} {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

export const Icon = styled.div`
  position: relative;
  margin: 0;

  @media ${device.laptop} {
    margin: 1rem 0;
  }

  img {
    width: 40px;
    height: 40px;
    position: relative;
    z-index: 2;

    @media ${device.laptop} {
      width: 60px;
      height: 60px;
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  bottom: 5px;
  left: 15px;
  font-size: 10rem;
  background-color: var(--main-color);
  border-radius: 50%;
  z-index: 1;

  @media ${device.laptop} {
    width: 40px;
    height: 40px;
    bottom: 5px;
    left: 35px;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -1px;

  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

export const Description = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  letter-spacing: -0.5px;
  grid-column: span 2;

  @media ${device.laptop} {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;
