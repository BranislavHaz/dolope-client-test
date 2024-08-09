import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 2rem;
    align-items: start;
  }
`;

export const ContactSection = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: var(--main-color);
  color: #000;
  border-radius: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media ${device.laptop} {
    position: sticky;
    top: 0;
    left: 0;
  }
`;

export const CompanyName = styled.h2``;
export const CompanyInfo = styled.div`
  margin-top: 2rem;
`;
export const CompanyData = styled.p``;
export const Bold = styled.span`
  font-weight: 900;
`;

export const ContactFormSection = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  color: #000;
  border-radius: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
