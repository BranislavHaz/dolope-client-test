import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

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
  margin-bottom: 1rem;
  border-bottom: 1px solid #9d9d9d;
  cursor: pointer;
  transition: all 0.3s ease;

  @media ${device.laptop} {
    width: 80%;
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
  padding: 1rem 2rem 1rem 0;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Answer = styled.div`
  font-size: 1rem;
  color: #333;
`;

export const Close = styled.div`
  &::after {
    content: "+";
    font-size: 1.5rem;
    position: absolute;
    top: 1rem;
    right: 0;
    transition: transform 0.3s ease;
    transform: rotate(${(props) => (props.$isActive ? "135deg" : "0deg")});
  }
`;
