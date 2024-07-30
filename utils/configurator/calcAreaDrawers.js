const calcLengthSlideDrawer = (state) => {
  const availableSpace =
    state.corpus.depth - state.drawers.slideReserve - state.drawers.thickness;

  const slideSizes = state.drawers.slideSizes;

  for (let i = slideSizes.length - 1; i >= 0; i--) {
    if (slideSizes[i] <= availableSpace) {
      return slideSizes[i];
    }
  }

  return null;
};

export const calcAreaDrawers = (state, partsOfModules) => {
  const { sections, drawers } = state;
  const { countOfDrawers } = partsOfModules;
  const lengthSlideDrawer = calcLengthSlideDrawer(state);

  // Čelo zásuvky * 1
  const frontWidth =
    sections.width - 2 * drawers.grooveWidth - 2 * drawers.frontGap;
  const frontHeight = drawers.frontHeight;

  // Predná a zadná strana výsuvu * 2
  const frontAndBackWidth =
    sections.width -
    2 * drawers.grooveWidth -
    2 * drawers.dimensionsFromManual.sideBoxToInsideDrawer;
  const frontAndBackHeight =
    drawers.sideHeight -
    drawers.dimensionsFromManual.bottomSideDrawerToBottomDrawer -
    drawers.thicknessBottom;

  // Bočné strany výsuvu * 2
  const sideWidth =
    lengthSlideDrawer -
    drawers.thickness -
    drawers.dimensionsFromManual.backBoxToBackDrawer;
  const sideHeight = drawers.sideHeight;

  // Dno výsuvu * 1
  const bottomWidth =
    sections.width -
    2 * drawers.grooveWidth -
    2 * drawers.dimensionsFromManual.sideBoxToInsideDrawer +
    2 * drawers.sinkingBottom;
  const bottomHeight =
    lengthSlideDrawer -
    drawers.thickness -
    drawers.dimensionsFromManual.backBoxToBackDrawer;

  const drawersM2 =
    ((frontWidth * frontHeight +
      2 * (frontAndBackWidth * frontAndBackHeight) +
      2 * (sideWidth * sideHeight)) *
      countOfDrawers) /
    1000000;

  const drawersBottomM2 =
    (bottomWidth * bottomHeight * countOfDrawers) / 1000000;

  return {
    area: {
      drawers: drawersM2,
      drawersBottom: drawersBottomM2,
    },
    parts: {
      front: { width: frontWidth, height: frontHeight, count: countOfDrawers },
      frontAndBack: {
        width: frontAndBackWidth,
        height: frontAndBackHeight,
        count: countOfDrawers * 2,
      },
      side: { width: sideWidth, height: sideHeight, count: countOfDrawers * 2 },
      bottom: {
        width: bottomWidth,
        height: bottomHeight,
        count: countOfDrawers,
      },
    },
  };
};
