import styled from "styled-components";
import { device } from "@/utils/devices";

export const Header = styled.header`
  width: 100%;
  height: var(--m-header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);

  @media ${device.tablet} {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const Logo = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 1.7em;
  font-weight: 500;
`;

export const Dot = styled.span`
  font-size: 1em;
  color: var(--main-color);
`;
