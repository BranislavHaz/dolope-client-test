import styled from "styled-components";

export const Wrap = styled.div`
  width: 70px;
  //background-color: #fff;
  background-color: var(--main-color);
  opacity: 0.8;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  //border-top-left-radius: 40px 40px;
  border-bottom-left-radius: 12px 12px;

  & img {
    margin-top: 5px;
  }
`;

export const Text = styled.div`
  font-size: 1rem;
  padding: 0 3px 7px 3px;
`;
