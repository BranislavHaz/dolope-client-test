import styled, { css } from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const WrapSwiper = styled.div`
  .swiper {
    width: 100%;
    overflow: visible;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: auto;

    @media ${device.laptop} {
      width: 350px;
    }
  }

  .swiper-slide img {
    display: block;
    position: relative !important;
    width: 100%;
  }

  .swiper-slide:not(.swiper-slide-active) .name-block {
    opacity: 0;
  }

  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right {
    background-image: none !important;
  }

  .swiper-pagination-bullet-active {
    background: var(--primary-color);
  }
`;

export const TextWrap = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media ${device.laptop} {
    width: 80%;
  }
`;

export const TextBlock = styled.p`
  margin: 1rem 0;
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NameBlock = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const TitleName = styled.h3``;

export const Description = styled.p`
  text-align: center;
`;
