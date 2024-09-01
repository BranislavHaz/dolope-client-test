import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

const Wrap = styled.div`
  width: 90vw;
  background-color: ${({ bgColor }) => bgColor};
  position: relative;

  @media ${device.laptopL} {
    width: 960px;
  }

  @media ${device.laptopL} {
    width: 1100px;
  }
`;

const Container = ({ children, bgColor = "#fff" }) => {
  return <Wrap bgColor={bgColor}>{children}</Wrap>;
};

export default Container;
