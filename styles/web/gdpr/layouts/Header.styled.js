import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: auto;
    max-height: 30px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  &:hover img {
    transform: rotate(1deg) scale(1.04);
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.05));
  }
`;
