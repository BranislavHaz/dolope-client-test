import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Wrap = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export const Block = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
  text-align: center;

  @media ${device.tablet} {
    text-align: left;
  }

  @media ${device.laptopL} {
    font-size: 3.5rem;
  }
`;

export const Text = styled.p`
  margin-top: 2rem;
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.6rem;

  @media ${device.tablet} {
    text-align: left;
  }
`;

export const StrongText = styled.span`
  font-weight: 700;
`;

export const Benefits = styled.ul`
  margin-top: 2rem;
  width: 100%;
  list-style-type: none;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const Benefit = styled.li`
  display: flex;
  gap: 0.5rem;
`;

export const BenefitIcon = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  & a {
    min-width: 166px;
  }

  @media ${device.tablet} {
    justify-content: start;
  }
`;

export const ImagesWrap = styled.div`
  width: 100%;
  height: auto;
  min-height: 300px;
  display: flex;
  justify-content: center;
  position: relative;

  @media ${device.laptop} {
    min-height: 500px;
  }
`;
