import styled from "styled-components";

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 3px auto 3px;
  grid-template-rows: 1fr;
  height: 100%;
`;

export const ModuleWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Stand = styled.div`
  height: 100%;
  background-color: #282828;
`;

export const Self = styled.div`
  width: 100%;
  height: 3px;
  background-color: #282828;
`;

export const SpaceLine = styled.div`
  margin-left: 0.3em;
  margin-right: 0.2em;
  border-left: 0.13em dashed #000;
  opacity: 0.4;
`;

export const Space = styled.div`
  width: 100%;
  height: ${(props) => props.$height}px;
  display: flex;
  align-items: center;
  font-size: 0.8em;

  ${SpaceLine} {
    height: ${(props) => props.$height}px;
  }
`;

export const Hanger = styled.div`
  width: 100%;
  height: ${(props) => props.$height}px;
  background-color: #bada55;
`;

export const Drawers = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Drawer = styled.div`
  width: 100%;
  height: ${(props) => props.$height}px;
  border: 2px solid #fff;
  background-color: #000;

  &:not(:last-of-type) {
    border-bottom: none;
  }
`;
