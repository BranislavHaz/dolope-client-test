import styled from "styled-components";
import { device } from "@/utils/devices";

export const FlashMessageWrap = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.8em 0;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 999;

  @media ${device.tablet} {
    display: none;
  }
`;

const FlashMessage = styled.div`
  width: 90vw;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: var(--border-radius);
  animation: var(--blob-animation);
  position: relative;

  &::before {
    width: 2rem;
    height: 2rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    color: #fff;
    border-radius: var(--border-radius);
    opacity: 0.6;
  }

  &::after {
    content: "X";
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    transform: scaleX(1.2);
    font-size: 1.1rem;
  }
`;

export const Text = styled.div`
  margin-left: 3rem;
`;

export const ErrorMessage = styled(FlashMessage)`
  color: var(--font-color-error);
  background-color: #fff2f2;

  &::before {
    content: "x";
    background-color: var(--font-color-error);
  }
`;
