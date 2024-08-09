import styled from "styled-components";

export const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
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
`;

export const ErrorText = styled.div`
  color: #ff6347;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  position: absolute;
  top: 100%;
  left: 0;
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

export const FileDropArea = styled.div`
  border: 2px dashed #ddd;
  border-radius: 4px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s ease, background-color 0.3s ease;
  background-color: ${(props) =>
    props.isDragActive ? "#f0f0f0" : "transparent"};
  border-color: ${(props) =>
    props.isDragActive ? "var(--main-color)" : "#ddd"};
`;

export const UploadMessage = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #666;
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
