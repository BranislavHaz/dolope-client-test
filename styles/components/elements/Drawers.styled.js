import { styled } from "styled-components";

export const DrawerTop = styled.div`
  grid-area: "DrawerTop";
  border-bottom: 1px solid #000;
`;
export const DrawerBottom = styled.div`
  grid-area: "DrawerBottom";
  border-top: 1px solid #000;
`;
export const DrawerSideLeft = styled.div`
  grid-area: "DrawerSide";
  border-right: 1px solid #000;
`;
export const DrawerSideRight = styled.div`
  grid-area: "DrawerSide";
  border-left: 1px solid #000;
`;
export const DrawerGroove = styled.div`
  grid-area: "DrawerGroove";
`;
export const DrawerFront = styled.div`
  grid-area: "DrawerFront";
  border-top: 1px solid #000;
`;
export const DrawerGripGap = styled.div`
  grid-area: "DrawerGripGap";
  background-color: #fff;
`;

export const Drawers1 = styled.div`
  display: grid;
  background-color: #eb5e8d;

  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
`}

  grid-template-areas:
    "DrawerSideLeft DrawerTop DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerBottom DrawerSideRight";
`;

export const Drawers2 = styled.div`
  display: grid;
  background-color: #eb5e8d;

  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
`}

  grid-template-areas:
    "DrawerSideLeft DrawerTop DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerBottom DrawerSideRight";
`;

export const Drawers3 = styled.div`
  display: grid;
  background-color: #eb5e8d;

  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
`}

  grid-template-areas:
    "DrawerSideLeft DrawerTop DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerBottom DrawerSideRight";
`;

export const Drawers4 = styled.div`
  display: grid;
  background-color: #eb5e8d;

  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
`}

  grid-template-areas:
    "DrawerSideLeft DrawerTop DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerBottom DrawerSideRight";
`;
