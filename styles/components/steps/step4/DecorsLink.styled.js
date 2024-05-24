import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
    img {
      transform: scale(1.05);
    }
  }
`;

export const ImageWrap = styled.div`
  img {
    transition: all 0.1s ease-in-out;
  }
`;

export const TextWrap = styled.div`
  text-decoration: underline;
`;
