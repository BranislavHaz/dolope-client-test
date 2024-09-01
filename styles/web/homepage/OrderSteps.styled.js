import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-items: center;
`;

export const SectionTitle = styled.h2`
  max-width: 600px;
  font-size: 1.7rem;
  font-weight: 800;
  text-align: center;
`;

export const ContentWrap = styled.div`
  display: grid;
  justify-content: start;
  align-items: center;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Block = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow-x: hidden;
`;

export const SwiperWrap = styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  & .swiper {
    width: 100%;
    height: 100%;
  }

  & .swiper-slide {
    height: 400px;
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.96;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--secundary-color);
    width: 1.5rem;
    height: 1.5rem;

    &::after {
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: var(--secundary-color);
  }
`;

export const OrderStepsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const OrderStepsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const StepItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StepItem = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StepIcon = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--secondatry-color);
  font-weight: 900;
`;

export const StepTextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const StepTitle = styled.h4`
  font-size: 1.1rem;
`;
export const StepText = styled.p``;
