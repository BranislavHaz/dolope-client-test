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
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #f0f0f0;
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

export const MobileMenuContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-items: center;
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
    font-weight: 700;
    position: relative;
    margin-top: 1rem;
    display: inline-block;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
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
    font-weight: 700;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 500;

    &:hover {
      color: #333;
    }
  }
`;
