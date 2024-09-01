import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

const SectionTitleStyled = styled.h2`
  max-width: 80vw;
  font-size: 1.7rem;
  font-weight: 800;
  text-align: center;

  @media ${device.tablet} {
    max-width: 450px;
  }

  @media ${device.laptop} {
    max-width: 600px;
  }
`;

const SectionTitle = ({ children }) => {
  return <SectionTitleStyled>{children}</SectionTitleStyled>;
};

export default SectionTitle;
