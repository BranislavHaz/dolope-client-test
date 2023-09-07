import { styled } from "styled-components";

export const DrawerTop = styled.div`
  grid-area: "DrawerTop";
  background-color: yellow;
`;
export const DrawerBottom = styled.div`
  grid-area: "DrawerBottom";
  background-color: green;
`;
export const DrawerSide = styled.div`
  grid-area: "DrawerSide";
  background-color: aqua;
`;
export const DrawerGroove = styled.div`
  grid-area: "DrawerGroove";
  background-color: bisque;
`;
export const DrawerFront = styled.div`
  grid-area: "DrawerFront";
  background-color: black;
`;
export const DrawerGripGap = styled.div`
  grid-area: "DrawerGripGap";
  background-color: blueviolet;
`;
export const DrawerFrontGap = styled.div`
  grid-area: "DrawerFrontGap";
  background-color: red;
`;

export const DrawerSingle = styled.div`
  display: grid;

  ${({
    $thicknessDTD,
    $frontWidth,
    $frontHeight,
    $grooveWidth,
    $frontGap,
    $gripGap,
  }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontGap}px ${$frontWidth}px ${$frontGap}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$frontGap}px ${$thicknessDTD}px;
`}

  grid-template-areas:
    "DrawerSide DrawerTop DrawerTop DrawerTop DrawerSide"
    "DrawerSide DrawerFrontGap DrawerGripGap DrawerFrontGap DrawerSide"
    "DrawerSide DrawerFrontGap DrawerFront DrawerFrontGap DrawerSide"
    "DrawerSide DrawerFrontGap DrawerFrontGap DrawerFrontGap DrawerSide"
    "DrawerSide DrawerBottom DrawerBottom DrawerBottom DrawerSide";
`;
