import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Wrap = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #dbdada;
  border-radius: 24px;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WrapElement = styled.div`
  position: relative;
  border-bottom: 1px solid #9d9d9d;
  cursor: pointer;
  transition: all 0.3s ease;

  @media ${device.laptop} {
    width: 80%;
  }

  &:last-of-type {
    border-bottom: 0;
  }

  .answer {
    max-height: ${(props) => (props.$isActive ? "500px" : "0")};
    opacity: ${(props) => (props.$isActive ? 1 : 0)};
    padding: ${(props) => (props.$isActive ? "1rem 0" : "0")};
    overflow: hidden;
    transition: all 0.15s ease;
  }
`;

export const Question = styled.div`
  padding: 1.5rem 2rem 1.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
`;

export const Answer = styled.div`
  font-size: 1rem;
  color: #333;
`;

export const Close = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);

  &::after {
    content: "+";
    display: inline-block;
    font-size: 1.5rem;
    transition: transform 0.3s ease;
    transform: rotate(${(props) => (props.$isActive ? "135deg" : "0deg")});
  }
`;
