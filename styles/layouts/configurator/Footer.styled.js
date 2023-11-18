import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: var(--m-footer-height);
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  font-size: 0.8em;
  text-transform: uppercase;
  background-color: var(--bg-color-config);
  border-top: 1px solid rgba(235, 235, 235, 0.75);
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
  opacity: ${(props) => (props.$isActive ? "1" : "0")};

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
  border: 1px solid;
  border-radius: 9px;
  font-size: 0.8em;
  background-color: ${(props) =>
    props.$isActive ? "var(--main-color)" : "var(--main-color-non-active)"};
  border-color: ${(props) =>
    props.$isActive ? "var(--main-color)" : "var(--main-color-non-active)"};
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  cursor: ${(props) => (props.$isActive ? "pointer" : "not-allowed")};

  &::after {
    content: ">";
    margin-left: 0.3em;
  }
`;
