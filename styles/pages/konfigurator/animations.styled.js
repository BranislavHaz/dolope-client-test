import { keyframes } from "styled-components";

export const blobIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.01);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
