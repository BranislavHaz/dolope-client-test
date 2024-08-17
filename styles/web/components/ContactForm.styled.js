import styled, { css } from "styled-components";
import { device } from "@/utils/configurator/devices";

export const TextIsSendWrap = styled.div`
  text-align: center;
  font-size: 1rem;

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;
export const TextIsSend = styled.p`
  margin: 1rem 0;
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  position: relative;

  ${(props) =>
    props.$isSend
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 200px;
          padding: 0;

          @media ${device.laptop} {
            min-height: 300px;
          }

          ${TextIsSendWrap} {
            display: block;
          }

          & form {
            display: none;
          }
        `
      : css`
          padding: 2rem;

          ${TextIsSendWrap} {
            display: none;
          }
        `}
`;

export const FormField = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
  }
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: border-color 0.3s ease;
    font-size: 1rem;
    &:focus {
      border-color: var(--main-color);
      outline: none;
    }
  }
  textarea {
    min-height: 100px;
    resize: vertical;
  }

  &:last-of-type {
  }
`;

export const ErrorText = styled.div`
  color: #ff6347;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  position: absolute;
  top: 0;
  right: 0;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const SubmitButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.8rem;
  background-color: var(--main-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #333;
    transform: scale(1.02);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const UploadButton = styled.button`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: var(--main-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }
`;

export const UploadedFilesList = styled.ul`
  margin-top: 1rem;
  list-style: none;
  padding-left: 0;
`;

export const UploadedFile = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background-color: #f1f1f1;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveFileButton = styled.button`
  background: transparent;
  border: none;
  color: #ff6347;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #e60000;
  }
`;
