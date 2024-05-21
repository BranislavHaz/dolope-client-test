import styled, { css } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const TypeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Button = styled.div`
  width: auto;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  height: 44px;
  line-height: 1.15;
  padding: 10px 25px;
  margin: 0.5em 0;
  transition: all 0.2s, box-shadow 0.08s ease-in;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  color: var(--font-color);

  ${(props) =>
    props.$isActive &&
    css`
      background-color: var(--bg-input-active);
      color: #fff;
    `}

  &:hover {
    transform: skewX(-1deg) scale(1.02);
    filter: brightness(1.01);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    background-color: var(--bg-input-active);
    color: #fff;
  }
`;
