import { styled, css } from "styled-components";
import { device } from "@/utils/configurator/devices";

export const Space = styled.div`
  position: relative;
  background-color: #fff;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px inset,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
`;

export const Line = styled.div`
  height: 100%;
  margin-left: 0.2em;
  border-left: 1px dashed #000;
  opacity: 0.3;

  @media ${device.tablet} {
    margin-left: 0.3em;
    border-left: 0.13em dashed #000;
  }
`;

export const HeightText = styled.div`
  margin-left: 0.3em;
  opacity: 0.4;

  @media ${device.tablet} {
    margin-left: 0.6em;
  }

  ${(props) => {
    switch (props.$fontSize) {
      case "small":
        return "font-size: 0.4rem; line-height: 0.4rem;";
      case "medium":
        return "font-size: 0.6rem; line-height: 0.6rem;";
      case "large":
        return "font-size: 0.7rem; line-height: 0.7rem;";
      default:
        return "display: none";
    }
  }}
`;
