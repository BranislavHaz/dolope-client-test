import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: var(--m-footer-height);
  display: flex;
  position: sticky;
  left: 0;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  font-size: 0.8em;
  text-transform: uppercase;
  background-color: #fff;
  box-shadow: 0px -3px 17px rgba(0, 0, 0, 0.08);
  z-index: 1;
`;

export const BackButton = styled.div`
  width: 30%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 9px;
  background-color: #fff;
  color: #000;
  font-size: 0.8em;

  &::before {
    content: "<";
    margin-right: 0.3em;
  }
`;

export const NextButton = styled.div`
  width: 30%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--main-color);
  border-radius: 9px;
  background-color: var(--main-color);
  color: #fff;
  font-size: 0.8em;

  &::after {
    content: ">";
    margin-left: 0.3em;
  }
`;