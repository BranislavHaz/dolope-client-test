import styled from "styled-components";
import { device } from "@/utils/devices";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapContent = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapSection = styled.div`
  width: 90vw;
  max-width: 1200px;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;

  @media ${device.tablet} {
    margin-top: 4rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #616161;
`;
