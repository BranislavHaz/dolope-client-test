import styled, { css } from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Header = styled.header`
  width: 100%;
  min-height: 60px;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: relative;
  background-color: #fff;
  overflow-x: hidden;
  z-index: 11;

  ${({ $isSticky }) =>
    $isSticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 10;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    `}
`;

// Desktop styles

export const HeaderContentDesktop = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  display: none;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: auto;
    max-height: 30px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  &:hover img {
    transform: scale(1.04);
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.05));
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0.6rem;
    position: relative;
    transition: transform 0.3s ease;
    font-weight: 700;
  }

  li::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #f1b90d, #f3c61a, #cf980b);
    background-size: 200% 200%;
    transition: opacity 0.3s ease, background-position 0.3s ease;
    opacity: 0;
  }

  li:hover {
    transform: scale(1.03);
  }

  li:hover::after {
    opacity: 1;
    background-position: 100% 50%;
  }
`;

// Mobile styles
export const HeaderContentMobile = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media ${device.laptop} {
    display: none;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.5rem;

  img {
    max-height: 40px;
  }
`;
