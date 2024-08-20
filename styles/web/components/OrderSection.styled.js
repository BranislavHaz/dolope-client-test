import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;

  @media ${device.laptop} {
    grid-template-columns: 0.8fr 1fr;
    column-gap: 2rem;
  }
`;

export const Image = styled.div`
  width: auto;
  height: 100%;
  position: relative;
  display: none;

  @media ${device.laptop} {
    display: block;
    opacity: 0.9;
  }
`;

export const TextWrap = styled.div`
  width: auto;

  @media ${device.laptop} {
  }
`;

export const TextBlock = styled.div`
  margin: 1rem 0;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: 900;
  letter-spacing: -1px;

  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

export const OrderNum = styled.span`
  position: relative;
  margin-right: 10px;
  z-index: 2;

  &::after {
    content: "";
    width: 30px;
    height: 30px;
    background-color: var(--main-color);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;

    @media ${device.laptop} {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Text = styled.div``;
