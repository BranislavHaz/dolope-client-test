import styled from "styled-components";
import { device } from "@/utils/devices";

export const Doors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media ${device.tablet} {
    margin-bottom: 2rem;
  }
`;

export const Handle = styled.div`
  width: ${(props) => props.$width}px;
  height: 100%;
  background-color: #c0c0c0;
  border: 1px solid #000;
`;
