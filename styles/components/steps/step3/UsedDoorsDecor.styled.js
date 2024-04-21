import styled from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  width: 90%;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  margin: 2rem 1rem 0 1rem;
  padding-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius);
  animation: var(--blob-animation);

  @media ${device.tablet} {
  }
`;

export const Title = styled.h3`
  width: 95%;
  font-weight: 300;
  padding: 0.6rem 0 1rem 0;
`;
