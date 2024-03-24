import styled from "styled-components";

export const ModalWrap = styled.div`
  width: calc(${(props) => props.$width} * 0.98px);
  height: calc(${(props) => props.$height} * 0.98px);
  min-height: calc(${(props) => props.$height} * 0.98px);
  padding-bottom: 2em;
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
  overflow-y: auto;
  transition: all 0.25s ease-out;

  background: rgba(255, 255, 255, 0.52);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
`;

export const TopBar = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  opacity: 1;
  background-color: #fff;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.02) 0px 4px 6px -2px;
`;

export const CloseModal = styled.div`
  width: 100%;
  height: 3.2rem;
  text-align: right;
  font-weight: 300;
  font-size: 16px;
  line-height: 3rem;
  border-bottom: 1px solid #bebebe;
  margin-bottom: -1px;
`;

export const CloseIcon = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 1em 0 0.3em;
  opacity: 0.6;
`;
