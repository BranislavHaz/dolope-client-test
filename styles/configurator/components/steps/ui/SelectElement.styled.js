import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const SelectElement = styled.div`
  cursor: pointer;
  box-shadow: var(--select-inactive-shadow);
  border-radius: var(--select-radius);
  padding: 8px;
  transition: all 0.1s ease-in;

  &:hover {
    transform: scale(1);

    @media ${device.tablet} {
      transform: var(--select-tranform-hover);
    }
  }
`;
