const calcLengthSlideDrawer = (state) => {
  const availableSpace =
    state.wardrobe.corpus.depth -
    state.drawers.slideReserve -
    state.drawers.thickness;

  const slideSizes = state.drawers.slideSizes;

  for (let i = slideSizes.length - 1; i >= 0; i--) {
    if (slideSizes[i] <= availableSpace) {
      return slideSizes[i];
    }
  }

  return null;
};

export const calcAreaDrawers = (state, countOfDrawers) => {
  const { sections, drawers } = state;
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

  const fullAreaDrawers =
    ((frontWidth * frontHeight +
      2 * (frontAndBackWidth * frontAndBackHeight) +
      2 * (sideWidth * sideHeight)) *
      countOfDrawers) /
    1000000;

  const fullAreaDrawersBottom =
    (bottomWidth * bottomHeight * countOfDrawers) / 1000000;

  return {
    front: `${frontWidth}x${frontHeight}`,
    frontAndBack: `${frontAndBackWidth}x${frontAndBackHeight}`,
    side: `${sideWidth}x${sideHeight}`,
    bottom: `${bottomWidth}x${bottomHeight}`,
    drawersM2: fullAreaDrawers,
    drawersBottomM2: fullAreaDrawersBottom,
  };
};
