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
  };
};
