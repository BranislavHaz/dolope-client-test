import styled, { keyframes } from "styled-components";
import { device } from "@/constants/sizeDevices";

export const Wrap = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr 2fr;
  }
`;

export const PriceWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #282828;
  color: #fff;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const FormWrap = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  border-radius: 8px;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    & input,
    & textarea {
      width: 100%;
    }
  }
`;

export const InputWrap = styled.div`
  margin-top: 0.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    margin-top: 0.3rem;
  }

  & input,
  & textarea {
    background-color: ${(props) =>
      props.$isError ? "rgba(225, 85, 85 , 0.3)" : "rgba(255, 255, 255, 0.3)"};
    outline: none;
    border: 1px solid rgba(40, 40, 40, 0.3);
    border-radius: 10px;
    font-size: 1.05rem;
    transition: all 0.15s ease-in-out;

    &:active,
    &:focus {
      background-color: rgba(239, 239, 239, 0.7);
      border: var(--border-input-active);
    }
  }

  & input {
    height: 2.8rem;
    padding: 0.2rem 0.8rem;
  }

  & textarea {
    height: 6rem;
    padding: 0.5rem 0.8rem;
    resize: none;
  }

  & label {
    color: ${(props) => (props.$isInconfirmed ? "#ff6347" : "#333")};
  }

  input[type="checkbox"] {
    accent-color: #282828;
    width: 35px;
    height: 35px;
    font-size: 2rem;
    padding: 0.5rem;
    border-radius: 1rem;

    @media ${device.laptop} {
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    color: #000;
  }
`;

export const InputMessage = styled.div`
  width: 100%;
  color: ${(props) => (props.$isError ? "var(--font-color-error)" : "#282828")};
  text-align: end;
  font-size: 0.9rem;
`;

export const ConsentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
`;

export const ConsentText = styled.div`
  font-size: 0.9rem;
`;

export const SubmitButton = styled.button`
  margin-top: 1.5rem;
  padding: 1.2rem 1.5rem;
  color: #fff;
  background-color: #282828;
  font-weight: 600;
  border-radius: 8px;
  text-transform: uppercase;
  text-align: center;
  outline: none;
  border: none;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const OrderStatus = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.1rem;
  color: #282828;
  position: relative;
  z-index: 1;
`;

export const OrderStatusRow = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const ThanksRow = styled.div`
  margin-top: 1rem;
  font-weight: 500;
`;

export const Emoji = styled.span`
  font-size: 1.3rem;
`;

const envFloating = keyframes`
  0% {
    transform: translate(-2px, -5px);
  }
  100% {
    transform: translate(0, 5px);
  }
`;

const envDropping = keyframes`
  0% {
    background-position: 100px 11px, 115px 35px, 105px 60px;
    opacity: 1;
  }
  50% {
    background-position: 0px 11px, 20px 35px, 5px 60px;
  }
  60% {
    background-position: -30px 11px, 0px 35px, -10px 60px;
  }
  75%,
  100% {
    background-position: -30px 11px, -30px 35px, -30px 60px;
    opacity: 0;
  }
`;

export const Loader = styled.div`
  position: relative;
  border-style: solid;
  box-sizing: border-box;
  border-width: 40px 60px 30px 60px;
  border-color: #282828 #585858 #707070 #818181;
  animation: ${envFloating} 1s ease-in infinite alternate;

  &::after {
    content: "";
    position: absolute;
    right: 62px;
    top: -40px;
    height: 70px;
    width: 50px;
    background-image: linear-gradient(#fff 45px, transparent 0),
      linear-gradient(#fff 45px, transparent 0),
      linear-gradient(#fff 45px, transparent 0);
    background-repeat: no-repeat;
    background-size: 30px 4px;
    background-position: 0px 11px, 8px 35px, 0px 60px;
    animation: ${envDropping} 0.75s linear infinite;
  }
`;
