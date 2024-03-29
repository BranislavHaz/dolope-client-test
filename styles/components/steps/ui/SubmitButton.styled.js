import styled, { css } from "styled-components";

export const SubmitWrap = styled.div`
  position: sticky;
  bottom: -2px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};

  ${(props) =>
    props.$withBg &&
    css`
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.04) -3px -10px 15px -3px,
        rgba(0, 0, 0, 0.02) 0px -4px 6px -2px;
    `}
`;

export const SubmitButton = styled.div`
  display: inline-block;
  margin: 0.5rem 0;
  padding: 1em 2em;
  background-color: var(--bg-button);
  border: 0;
  border-radius: var(--border-radius);
  font-size: 14px;
  color: #fff;
`;
