import styled from "styled-components";

export const Wardrobe = styled.div`
  position: relative;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: end;
`;
