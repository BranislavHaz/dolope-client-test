import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const FooterWrap = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  width: 90%;
  max-width: 1200px;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.div`
  width: 100px;
  height: auto;

  & img {
    position: relative !important;
  }
`;

export const FooterLink = styled.div`
  color: #585858;

  &:hover {
    cursor: pointer;
    color: #000;
    transform: scale(1.01);
  }
`;

export const FooterText = styled.div`
  display: none;
  color: #585858;

  @media ${device.laptop} {
    display: block;
  }
`;
