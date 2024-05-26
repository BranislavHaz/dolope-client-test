import styled from "styled-components";
import { device } from "@/utils/devices";

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
  background-color: var(--main-color);
  border-radius: 8px;
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
`;

export const InputMessage = styled.div`
  width: 100%;
  color: ${(props) => (props.$isError ? "var(--font-color-error)" : "#282828")};
  text-align: end;
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
