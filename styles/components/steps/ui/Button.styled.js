import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

const Button = styled.div`
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  width: auto;
  appearance: button;
  backface-visibility: hidden;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  height: 44px;
  line-height: 1.15;
  outline: none;
  padding: 10px 25px;
  margin: 0.5em 0;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  touch-action: manipulation;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    transform: skewX(-1deg) scale(1.02);
    filter: brightness(1.01);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  @media ${device.zero} {
    display: ${(props) =>
      props.$isVisibleMobile && props.$isVisible ? "flex" : "none"};
  }

  @media ${device.tablet} {
    display: ${(props) =>
      props.$isVisibleTablet && props.$isVisible ? "flex" : "none"};
  }
`;

export const LowerCaseText = styled.span`
  text-transform: lowercase;
`;

export const MainColorButton = styled(Button)`
  color: #fff;
  background-color: var(--main-color);
`;

export const DarkColorButton = styled(Button)`
  color: #fff;
  background-color: var(--bg-button);
`;

export const LightColorButton = styled(Button)`
  color: #000;
  background-color: var(--bg-button-light);
`;
