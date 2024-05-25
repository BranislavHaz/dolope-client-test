import styled from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

export const WrapType = styled.div`
  width: 90%;
  max-width: 1024px;
  margin-top: 2rem;
`;

export const TitleType = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;

  @media ${device.tablet} {
    text-align: start;
  }
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
