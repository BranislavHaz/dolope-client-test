import { styled } from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: #bada55;
  display: flex;
  justify-content: center;
`;

export const Wardrobe = styled.div`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: end;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
`;
