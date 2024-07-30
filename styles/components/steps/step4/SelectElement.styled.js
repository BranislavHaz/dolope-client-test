import styled, { css } from "styled-components";
import { device } from "@/utils/configurator/devices";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 0.5rem;
  border-radius: 5px;
  gap: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s ease-in-out;

  ${(props) =>
    props.$isActive &&
    css`
      border: 2px solid var(--main-color);
    `}

  &:hover {
    color: var(--main-color);
    img {
      transform: scale(1.05);
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin: 10px 0;
  }
`;

export const ImageWrap = styled.div`
  img {
    transition: all 0.1s ease-in-out;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;

export const Price = styled.div`
  color: var(--main-color);
  text-align: center;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const TextWrap = styled.div`
  text-align: start;
`;
