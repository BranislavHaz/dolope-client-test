import styled, { css } from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Wrap = styled.div`
  .swiper {
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: auto;

    @media ${device.laptop} {
      width: 300px;
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
    background: var(--main-color);
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const Button = styled.div`
  padding: 0.6rem 0.8rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.25s ease-in-out;
  border: 2px solid #000;
  background-color: transparent;

  ${(props) =>
    props.$isActive &&
    css`
      background-color: var(--main-color);
      border: none;
    `}

  @media ${device.laptop} {
    padding: 0.8rem 1rem;
  }

  &:hover {
    cursor: pointer;

    @media ${device.laptop} {
      background-color: #000;
      color: #fff;
      transform: scale(1.03);
    }
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
