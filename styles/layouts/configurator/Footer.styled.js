import styled from "styled-components";
import { device } from "@/utils/devices";

export const Footer = styled.footer`
  width: 100%;
  height: var(--m-footer-height);
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: ${(props) => (props.$isFirstStep ? "end" : "space-between")};
  align-items: center;
  padding: 0 1em;
  font-size: 0.8em;
  background-color: var(--bg-color-config);
  border-top: 1px solid rgba(235, 235, 235, 0.75);
  z-index: 1;
  font-size: 14px;

  @media ${device.tablet} {
    height: var(--l-footer-height);
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
