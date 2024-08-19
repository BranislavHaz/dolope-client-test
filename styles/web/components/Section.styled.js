import styled, { css } from "styled-components";
import { device } from "@/utils/configurator/devices";

export const SectionWrap = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  background-color: transparent;
`;

export const Section = styled.div`
  width: 90%;
  max-width: 1200px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media ${device.laptop} {
    padding: 3rem;
  }

  ${(props) =>
    props.$theme === "light"
      ? css`
          background-color: #fff;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          border-radius: 24px;
        `
      : css`
          background-color: transparent;
          box-shadow: none;
          border-radius: 0;
        `}

  ${(props) =>
    props.$padding === "classic"
      ? css`
          padding: 2rem;

          @media ${device.laptop} {
            padding: 3rem;
          }
        `
      : css`
          padding: 2rem 0;

          @media ${device.laptop} {
            padding: 3rem 0;
          }
        `}
`;

export const Label = styled.div`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  color: #717171;
`;

export const Title = styled.div`
  margin-top: 1rem;
  font-weight: 900;
  font-size: 2rem;
  line-height: 2.2rem;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -2px;

  @media ${device.laptop} {
    width: 80%;
    font-size: 3rem;
    line-height: 4rem;
  }
`;
