import styled from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  position: sticky;
`;

// Desktop styles

export const HeaderContentDesktop = styled.div`
  width: 90%;
  max-width: 1200px;
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
    transform: rotate(1deg) scale(1.04);
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
    font-weight: 500;
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

export const Button = styled.div`
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px solid #000;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: var(--main-color);
    border-color: var(--main-color);
    color: #fff;
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
  position: relative;

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
