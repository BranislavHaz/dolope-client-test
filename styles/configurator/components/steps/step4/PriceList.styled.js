import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const WrapType = styled.div`
  width: 100%;
  margin-top: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 10px;
  overflow: hidden;
`;

export const WrapPriceListItems = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 5px;

  @media ${device.tablet} {
    grid-template-columns: 3fr 2fr;
  }

  & > div:not(:nth-last-child(-n + 2)) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const TitleType = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  text-align: center;
  background: var(--main-color);
  color: #fff;
  grid-column: span 2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media ${device.tablet} {
    font-size: 1.5rem;
    text-align: start;
    padding: 1.5rem 1rem;
  }
`;

export const Name = styled.div`
  padding: 0.8rem;
  background: #fff;
  border-bottom: none;
  font-weight: 500;
  color: #333;

  @media ${device.tablet} {
    padding: 1.2rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem;
  border-left: 1px solid #e0e0e0;
  background: #f9f9f9;
  color: #666;

  @media ${device.tablet} {
    padding: 1.2rem;
  }
`;
