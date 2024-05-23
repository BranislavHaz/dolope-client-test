import styled from "styled-components";

export const LightBox = styled.div`
  display: ${(props) => (props.$isActive ? "flex" : "none")};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    display: block;
    width: auto;
    max-width: 70vw;
    height: auto;
    max-height: 80vh;
    margin: 0 auto;
  }
`;

export const LightBoxContent = styled.div`
  position: relative;
  width: 70vw;
  height: 80vh;
`;

export const CloseIcon = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1) rotate(180deg);
  }
`;
