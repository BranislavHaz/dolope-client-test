import styled, { css } from "styled-components";

export const Wrap = styled.div`
  width: 70px;
  background-color: var(--main-color);
  opacity: 0.8;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  border-bottom-left-radius: 12px 12px;
  z-index: 90;
  cursor: pointer;

  ${(props) =>
    props.$isLastStep &&
    css`
      left: 0;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 12px 12px;
    `}

  & img {
    margin: 1rem 0;
  }
`;

export const TextBlock = styled.div`
  font-size: 12px;
  padding: 3px 3px 7px 3px;
  text-align: center;
`;

export const Text = styled.div``;
