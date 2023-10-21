import styled from "styled-components";

export const WardrobeConfig = styled.div`
  width: 100%;
  height: var(--m-wardrobe-config-height);
  display: flex;
  justify-content: center;
  box-shadow: 0px -3px 17px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  overflow-y: auto;
`;

export const ContentWrapper = styled.div`
  width: 90%;
  margin-top: 1em;
`;

export const Images2Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
`;

export const ImageWrap = styled.div`
  padding: 0.6em;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
`;

export const AboutText = styled.div`
  font-size: 0.8em;
  padding-bottom: 0.5em;
  text-align: center;
`;
