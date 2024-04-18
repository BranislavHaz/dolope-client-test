export const calcViewportSizes = (state) => {
  const { px } = state.viewport;

  // Start Corpus
  const heightCorpus = Math.round(state.corpus.height * px * 100) / 100;
  // End Corpus

  // Start Section
  const widthSection = Math.round(state.sections.width * px * 100) / 100;
  // End Section

  // Start Wardrobe
  const countSideWallsCover = state.sideWalls.cover.count;
  const countStands = state.sections.count + 1;
  const countSections = state.sections.count;

  const thicknessDTD =
    state.wardrobe.thickness * px <= 3 ? 3 : state.wardrobe.thickness * px;
  const widthWardrobe =
    Math.round(
      (countSideWallsCover * thicknessDTD +
        countStands * thicknessDTD +
        countSections * widthSection) *
        100
    ) / 100;
  const heightWardrobe = Math.round(state.wardrobe.height * px * 100) / 100;
  // End Wardrobe

  // Start Drawers
  const frontHeight = Math.round(state.drawers.frontHeight * px * 100) / 100;
  const grooveWidth = Math.round(state.drawers.grooveWidth * px * 100) / 100;
  const gripGap = Math.round(state.drawers.gripGap * px * 100) / 100;
  const frontGap = Math.round(state.drawers.frontGap * px * 100) / 100;
  const frontWidth =
    Math.round(
      (state.sections.width - 2 * state.drawers.grooveWidth) * px * 100
    ) / 100;
  const drawersHeight = {
    1: gripGap + frontHeight + 2 * thicknessDTD,
    2: 2 * (gripGap + frontHeight + thicknessDTD),
    3: 3 * (gripGap + frontHeight) + 2 * thicknessDTD,
    4: 4 * (gripGap + frontHeight) + 2 * thicknessDTD,
  };
  // End Drawers

  return {
    wardrobe: {
      width: widthWardrobe,
      height: heightWardrobe,
      thicknessDTD,
    },
    corpus: {
      height: heightCorpus,
    },
    section: {
      width: widthSection,
    },
    drawers: {
      frontWidth,
      frontHeight,
      grooveWidth,
      gripGap,
      frontGap,
      height: drawersHeight,
    },
  };
};
