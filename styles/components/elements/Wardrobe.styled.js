import styled from "styled-components";

export const Wardrobe = styled.div`
  position: relative;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: end;
  transform: ${(props) =>
    props.$scaleFactor === undefined
      ? "scale(0)"
      : `scale(${props.$scaleFactor})`};
  animation: scaleAnimation 0.6s ease-in-out;

  @keyframes scaleAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
