import styled, { css, keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MobileMenu = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${(props) =>
    props.$isActive &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;

export const CloseMenuButton = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.5rem;
`;

export const MobileMenuContent = styled.div`
  width: 80%;
  font-size: 1.1rem;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  li {
    margin: 0.5rem 0;
    opacity: 0;
    animation: ${fadeInUp} 0.5s ease forwards;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.5s;
    }
    &:nth-child(3) {
      animation-delay: 1s;
    }
  }

  li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    position: relative;
    padding-left: 1.5rem;
    display: inline-block;
    transition: color 0.3s ease;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--main-color);
    }

    &:hover {
      color: var(--main-color);
    }
  }
`;

export const ContactInfo = styled.div`
  margin-top: 2rem;
  text-align: center;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    color: #666;
  }

  a {
    color: var(--main-color);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #333;
    }
  }
`;

export const ActionButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: darken(var(--main-color), 10%);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
