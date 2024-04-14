import styled from "styled-components";

export const Corpus = styled.div`
  display: flex;
  align-items: end;
  position: absolute;
  left: ${(props) => props.$leftOffsetSize}px;
  bottom: 0;
`;
