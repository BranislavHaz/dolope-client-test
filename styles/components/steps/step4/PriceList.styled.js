import styled from "styled-components";

export const Wrap = styled.div`
  width: 90%;
  max-width: 1024px;
  padding: 3rem;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-bottom: 3rem;
  background-color: #fff;
`;

export const WrapPriceList = styled.div`
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 2fr 1fr;

  & > div:not(:nth-last-child(-n + 2)) {
    border-bottom: 1px solid #c7c7c7;
  }
`;

export const Name = styled.div`
  padding: 1rem;
  border-bottom: none;

  /*   &:not(:nth-last-of-type(2)):nth-last-of-type(odd) {
    border-bottom: 1px solid #c7c7c7;
  } */
`;

export const Description = styled.div`
  padding: 1rem;
  border-left: 1px solid #c7c7c7;

  /*   &:not(:last-of-type) {
    border-bottom: 1px solid #c7c7c7;
  } */
`;
