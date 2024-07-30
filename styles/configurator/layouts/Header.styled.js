import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const Header = styled.header`
  width: 100%;
  height: var(--m-header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);

  @media ${device.tablet} {
    height: var(--l-header-height);
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: end;

  & img {
    width: auto;
    max-height: 30px;

    @media ${device.tablet} {
      max-height: 35px;
    }
  }
`;
