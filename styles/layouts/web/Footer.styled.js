import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Footer = styled.div`
  margin: 1rem 0;
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.a`
  width: 100px;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;

  & img {
    position: relative !important;
  }

  & img:hover {
    transform: scale(1.04);
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.05));
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
