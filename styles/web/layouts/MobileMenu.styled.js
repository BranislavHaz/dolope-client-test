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
  z-index: 10;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  text-align: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  li {
    width: 100%;
    margin: 0.5rem 0;
    padding-bottom: 0.5rem;
    opacity: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    animation: ${fadeInUp} 0.5s ease forwards;
  }

  li a {
    text-decoration: none;
    color: #333;
    font-size: 1.3rem;
    font-weight: 500;
    position: relative;
    margin-top: 1rem;
    display: inline-block;
    transition: color 0.3s ease;

    &:hover {
      color: var(--main-color);
    }
  }
`;

export const ContactInfo = styled.div`
  margin: 3rem 0;
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
  padding: 0.8rem 1rem;
  background-color: var(--main-color);
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
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
