import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Wrap = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const WrapSteps = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.1rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`;

export const Step = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  background-color: transparent;
`;

export const NumWrap = styled.div`
  font-size: 7rem;
  color: var(--main-color);
  font-weight: 900;
  z-index: 0;
`;

export const ContentWrap = styled.div`
  margin-top: -3rem;
  padding: 0.5rem;
  background-color: var(--background-color);
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 10px;
    margin: 0 1rem;
    box-shadow: inset 0 -10px 10px -10px rgba(0, 0, 0, 0.3);
    pointer-events: none;
    z-index: 3;
  }
`;

export const TitleWrap = styled.div`
  padding: 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

export const Text = styled.div`
  padding: 0.5rem;
  color: #4b4b4b;
  line-height: 1.5rem;
  text-align: justify;
`;
