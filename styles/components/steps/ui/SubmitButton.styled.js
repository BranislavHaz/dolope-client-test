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
  cursor: pointer;
`;

export const SubmitButton = styled.div`
  display: inline-block;
  margin: 1.5rem 0;
  padding: 1em 2em;
  background-color: var(--bg-button);
  border: 0;
  border-radius: var(--border-radius);
  font-size: 14px;
  color: #fff;
`;
