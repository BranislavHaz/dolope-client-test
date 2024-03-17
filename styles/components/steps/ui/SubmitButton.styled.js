import styled from "styled-components";

export const SubmitButton = styled.div`
  margin-top: 1em;
  padding: 1em 2em;
  background-color: var(--bg-button);
  border: 0;
  border-radius: var(--border-radius);
  font-size: 14px;
  color: #fff;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
`;
