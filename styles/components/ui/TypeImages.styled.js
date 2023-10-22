import styled from "styled-components";

export const TypeImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`;

export const ImageWrap = styled.div`
  width: 90%;
  justify-self: center;
  padding: 0.6em;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.$isActive ? "var(--main-color-active)" : "#fff"};

  img {
    max-width: 100%;
    height: auto;
    text-align: center;
  }
`;

export const ImageText = styled.div`
  font-size: 0.8em;
  padding-bottom: 0.5em;
  text-align: center;
`;
