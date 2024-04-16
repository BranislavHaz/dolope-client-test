import { styled } from "styled-components";

export const DrawerTop = styled.div`
  border-bottom: 0.25px solid #000;
`;
export const DrawerBottom = styled.div`
  border-top: 0.25px solid #000;
`;
export const DrawerSideLeft = styled.div`
  border-right: 0.25px solid #000;
`;
export const DrawerSideRight = styled.div`
  border-left: 0.25px solid #000;
`;
export const DrawerFront = styled.div`
  border-top: 0.25px solid #000;
`;
export const DrawerGripGap = styled.div`
  background-color: #fff;
`;

const Drawers = styled.div`
  display: grid;

  ${(props) =>
    props.$bgImg
      ? `background-image: url(${props.$bgImg})`
      : "background-color: var(--wood-color)"};
`;

export const Drawers1 = styled(Drawers)`
  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
    grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
    grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
  `}
`;

export const Drawers2 = styled(Drawers)`
  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
    grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
    grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
  `}
`;

export const Drawers3 = styled(Drawers)`
  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
`}
`;

export const Drawers4 = styled(Drawers)`
  ${({ $thicknessDTD, $frontWidth, $frontHeight, $grooveWidth, $gripGap }) => `
  grid-template-columns: ${$grooveWidth}px ${$frontWidth}px ${$grooveWidth}px;
  grid-template-rows: ${$thicknessDTD}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$gripGap}px ${$frontHeight}px ${$thicknessDTD}px;
`}
`;
