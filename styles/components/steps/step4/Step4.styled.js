import styled from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const WardrobeWrap = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 70vw;
    height: calc(100vh - var(--l-header-height));
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentWrap = styled.div`
  width: 90%;
  margin: 0 1em;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  background-color: #282828;
  border-radius: 8px;
  color: #fff;

  @media ${device.tablet} {
    width: 30vw;
    margin: 0 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: var(--main-color);
  text-decoration-thickness: 2px;
`;

export const Price = styled.div`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 1.8rem;
  }
`;

export const OrderButton = styled.div`
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  background-color: var(--main-color);
  color: #000;
  font-weight: 500;
  border-radius: 8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TitlePricing = styled.div`
  width: 80%;
  margin: 1rem 0 0.5rem 0;
  text-align: left;
`;

export const ElementPricing = styled.div`
  width: 80%;
  height: 3rem;
  margin-bottom: 0.5rem;
  padding-left: 0.8rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #4b4b4b;
`;
