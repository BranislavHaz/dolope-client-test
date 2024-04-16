import { styled } from "styled-components";

export const DrawerTop = styled.div`
  grid-area: "DrawerTop";
  border-bottom: 0.25px solid #000;
`;
export const DrawerBottom = styled.div`
  grid-area: "DrawerBottom";
  border-top: 0.25px solid #000;
`;
export const DrawerSideLeft = styled.div`
  grid-area: "DrawerSide";
  border-right: 0.25px solid #000;
`;
export const DrawerSideRight = styled.div`
  grid-area: "DrawerSide";
  border-left: 0.25px solid #000;
`;
export const DrawerGroove = styled.div`
  grid-area: "DrawerGroove";
`;
export const DrawerFront = styled.div`
  grid-area: "DrawerFront";
  border-top: 0.25px solid #000;
`;
export const DrawerGripGap = styled.div`
  grid-area: "DrawerGripGap";
  background-color: #fff;
`;

export const Drawers1 = styled.div`
  display: grid;

  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
`}

  grid-template-areas:
    "DrawerSideLeft DrawerTop DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerBottom DrawerSideRight";

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

export const Drawers2 = styled.div`
  display: grid;

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

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

export const Drawers3 = styled.div`
  display: grid;

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

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

export const Drawers4 = styled.div`
  display: grid;

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

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

/*
import { styled } from "styled-components";

export const DrawerTop = styled.div`
  grid-area: "DrawerTop";
  border-bottom: 0.25px solid #000;
`;
export const DrawerBottom = styled.div`
  grid-area: "DrawerBottom";
  border-top: 0.25px solid #000;
`;
export const DrawerSideLeft = styled.div`
  grid-area: "DrawerSide";
  border-right: 0.25px solid #000;
`;
export const DrawerSideRight = styled.div`
  grid-area: "DrawerSide";
  border-left: 0.25px solid #000;
`;
export const DrawerGroove = styled.div`
  grid-area: "DrawerGroove";
`;
export const DrawerFront = styled.div`
  grid-area: "DrawerFront";
  border-top: 0.25px solid #000;
`;
export const DrawerGripGap = styled.div`
  grid-area: "DrawerGripGap";
  background-color: #fff;
`;

export const Drawers1 = styled.div`
  display: grid;

  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
`}

  grid-template-areas:
    "DrawerSideLeft DrawerTop DrawerSideRight"
    "DrawerSideLeft DrawerGripGap DrawerSideRight"
    "DrawerSideLeft DrawerFront DrawerSideRight"
    "DrawerSideLeft DrawerBottom DrawerSideRight";

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

export const Drawers2 = styled.div`
  display: grid;

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

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

export const Drawers3 = styled.div`
  display: grid;

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

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

export const Drawers4 = styled.div`
  display: grid;

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

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

*/
