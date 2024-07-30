import styled from "styled-components";
import { device } from "@/utils/configurator/devices";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

// Desktop styles

export const HeaderContentDesktop = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
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
    transform: rotate(4deg) scale(1.1);
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
  padding: 0.6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(90deg, #f1b90d, #f3c61a, #cf980b);
  background-size: 200% 200%;
  border-radius: 5px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  img {
    margin-right: 0.3rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    cursor: pointer;
    animation: gradientAnimation 3s ease infinite;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px, rgba(0, 0, 0, 0.2) 0px 2px 4px;
    transform: translateY(-2px);

    img {
      transform: scale(1.2);
    }
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
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
