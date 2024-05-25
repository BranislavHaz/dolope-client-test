import styled from "styled-components";
import { device } from "@/utils/devices";

export const WrapPreview = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;

  @media ${device.tablet} {
    flex-direction: row;
    margin-top: var(--l-header-height);
  }
`;

export const WardrobeWrap = styled.div`
  width: 100%;
  position: relative;

  @media ${device.tablet} {
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.tablet} {
    width: 30vw;
    margin: 0 2rem;
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
  position: relative;
`;

export const BackButton = styled.div`
  width: 90%;
  height: 3rem;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border: 2px solid #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 500;
  color: #282828;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  @media ${device.tablet} {
    width: 20vw;
  }

  &:hover {
    transform: translateX(-0.2rem) scale(1.02);
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  background-color: var(--main-color);
  color: #000;
  font-weight: 500;
  border-radius: 8px;
  text-transform: uppercase;
  text-align: center;
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
  height: auto;
  min-height: 3rem;
  margin-bottom: 0.5rem;
  padding: 0.3rem 0.3rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: #4b4b4b;
  position: relative;
  font-size: 0.9rem;
  transition: all 0.15s ease-in;

  &::before {
    content: "✓";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    padding: 0.2rem;
    background-color: #616161;
    color: var(--main-color);
    border-radius: 5px;
    font-size: 1.3rem;
  }

  &:hover {
    transform: scale(1.02);
    background-color: #4d4b4b;
  }
`;
