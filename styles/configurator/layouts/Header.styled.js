import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

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

  & img:hover {
    transform: rotate(1deg) scale(1.04);
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.05));
    cursor: pointer;
  }
`;
