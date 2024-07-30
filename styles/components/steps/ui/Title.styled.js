import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const TitleStep = styled.h2`
  margin: 1em 0;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;
