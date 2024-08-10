import styled, { keyframes } from "styled-components";

// Keyframes pre animáciu padajúcich konfiet
export const fall = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

// Štýl pre jednotlivé konfety
export const ConfettiPiece = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  animation: ${fall} ${({ duration }) => duration}s linear infinite;
  transform: translateX(-50%);
`;

// Wrapper pre konfety
export const ConfettiWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0.7;
  display: ${({ $isDisplay }) => ($isDisplay ? "block" : "none")};
`;

// Hlavný kontajner s pozadím konfetov
export const BackgroundWithConfetti = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0; // Nastavte pozadie podľa potreby
`;
