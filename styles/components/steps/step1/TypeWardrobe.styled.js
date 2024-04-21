import styled from "styled-components";
import { device } from "@/utils/devices";

export const FullWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: var(--blob-animation);
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: 70%;
    align-items: center;
  }
`;

export const TypesWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5em;
  row-gap: 0.5em;
  cursor: pointer;

  @media ${device.tablet} {
    max-width: 650px;
    column-gap: 1.2em;
    row-gap: 1.2em;
  }
`;

export const TypeImage = styled.div`
  max-width: 100%;
  padding: 0.5em;
  border: ${(props) =>
    props.$isActive
      ? "var(--border-input-active)"
      : "var(--border-input-default)"};
  border-radius: var(--border-radius);

  & img {
    width: 100%;
    height: auto;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 200;
  font-size: 14px;
  margin-bottom: 1em;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;
