export const calcViewportSizes = (state) => {
  const { wardrobe, corpus, sideWalls, sections } = state;
  const { px } = state.viewport;
  const countSideWallsCover = sideWalls.cover.count;
  const countStands = sections.count + 1;
  const countSections = sections.count;

  const thicknessDtd =
    wardrobe.thickness * px <= 3 ? 3 : wardrobe.thickness * px;
  const widthSection = Math.round(sections.width * px * 100) / 100;
  const heightCorpus = Math.round(corpus.height * px * 100) / 100;
  const heightWardrobe = Math.round(wardrobe.height * px * 100) / 100;
  const drawers = {
    frontWidth:
      Math.round(
        (state.sections.width - 2 * state.drawers.grooveWidth) * px * 100
      ) / 100,
    frontHeight: Math.round(state.drawers.frontHeight * px * 100) / 100,
    grooveWidth: Math.round(state.drawers.grooveWidth * px * 100) / 100,
    gripGap: Math.round(state.drawers.gripGap * px * 100) / 100,
    frontGap: Math.round(state.drawers.frontGap * px * 100) / 100,
  };

  drawers.height = {
    1: drawers.gripGap + drawers.frontHeight + 2 * thicknessDtd,
    2: 2 * (drawers.gripGap + drawers.frontHeight + thicknessDtd),
    3: 3 * (drawers.gripGap + drawers.frontHeight + thicknessDtd),
    4: 4 * (drawers.gripGap + drawers.frontHeight + thicknessDtd),
  };
  const widthWardrobe =
    Math.round(
      (countSideWallsCover * thicknessDtd +
        countStands * thicknessDtd +
        countSections * widthSection) *
        100
    ) / 100;

  return {
    thicknessDtd,
    widthWardrobe,
    heightWardrobe,
    heightCorpus,
    widthSection,
    drawers,
  };
};
