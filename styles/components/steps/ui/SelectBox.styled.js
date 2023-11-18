import styled from "styled-components";

export const SelectBoxWrap = styled.div`
  width: 100%;
  height: 4em;
  margin-bottom: 1em;
  padding: 1em 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  background-color: var(--bg-color-select-box);
  box-shadow: 0 0 6px 1px rgba(199, 199, 199, 0.25);
  border-radius: var(--border-radius);

  font-family: var(--font-family);
  color: var(--font-color);
`;

export const Icon = styled.div`
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: var(--bg-color-select-box-icon);
  border-radius: var(--border-radius);
`;

export const AcceptIcon = styled.span`
  display: ${(props) => (props.$isAccept ? "block" : "none")};
  width: 1em;
  height: 1em;
  position: absolute;
  top: -0.3em;
  right: -0.2em;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

export const ArrowWrap = styled.div`
  width: 3em;
  height: 3em;
  margin-left: auto;
  display: flex;
  justify-content: end;
  align-items: center;
`;
