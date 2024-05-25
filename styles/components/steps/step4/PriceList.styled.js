import styled from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const Title = styled.h2`
  margin-top: 2rem;

  @media ${device.tablet} {
    margin-top: 4rem;
  }
`;

export const WrapType = styled.div`
  width: 90%;
  max-width: 1024px;
  margin-top: 2rem;
`;

export const WrapPriceListItems = styled.div`
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media ${device.tablet} {
    grid-template-columns: 2fr 1fr;
  }

  & > div:not(:nth-last-child(-n + 2)) {
    border-bottom: 1px solid #c7c7c7;
  }
`;

export const TitleType = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  text-align: center;
  background-color: var(--main-color);
  grid-column: span 2;
  border-bottom: none !important;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media ${device.tablet} {
    text-align: start;
  }
`;

export const Name = styled.div`
  padding: 1rem;
  border-bottom: none;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-left: 1px solid #c7c7c7;
`;
