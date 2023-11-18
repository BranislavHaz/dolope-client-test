import styled from "styled-components";

export const ModalWrap = styled.div`
  width: calc(${(props) => props.$width} * 0.98px);
  height: calc(${(props) => props.$height} * 0.98px);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  opacity: ${(props) => (props.$isActive ? 1 : 0)};
  z-index: ${(props) => (props.$isActive ? 100 : 0)};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.25s ease-out;

  background: rgba(255, 255, 255, 0.52);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
`;

export const CloseModal = styled.div`
  width: 100%;
  text-align: right;
  font-weight: 300;
  font-size: 16px;
  line-height: 3em;
  border-bottom: 1px solid rgba(201, 201, 201, 0.3);
  opacity: 0.6;
`;

export const CloseIcon = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 1em 0 0.3em;
  opacity: 0.6;
`;
