import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const SplitContent = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Image = styled.div`
  width: 100%;
  position: relative;

  @media ${device.laptop} {
  }
`;

export const TextWrap = styled.div`
  width: auto;

  @media ${device.laptop} {
    width: 50%;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 900;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

export const Text = styled.div``;
