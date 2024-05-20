import styled from "styled-components";

export const TypeDecorsWrap = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & div:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
