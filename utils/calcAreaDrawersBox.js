export const calcAreaDrawersBox = (state, arrOfDrawers) => {
  const { wardrobe, sections, drawers } = state;
  let m2 = 0;

  for (let i = 0; i <= arrOfDrawers.length - 1; i++) {
    const countOfDrawers = arrOfDrawers[i];

    if (countOfDrawers > 0) {
      const widthGrooveAndSide =
        2 * drawers.thickness +
        drawers.frontGap +
        countOfDrawers * drawers.frontHeight +
        countOfDrawers * drawers.gripGap;

      // Vlys * 2
      const grooveWidth = widthGrooveAndSide;
      const grooveHeight = drawers.grooveWidth;

      // Boky zásuvkového boxu
      const sideBoxWidth = widthGrooveAndSide;
      const sideBoxHeight = wardrobe.corpus.depth - wardrobe.thickness;

      // Dno a vrch zásuvkového boxu
      const topAndBottomBoxWidth = sections.width - 2 * drawers.grooveWidth;
      const topAndBottomBoxHeight = wardrobe.corpus.depth;

      const fullArea =
        (2 * (grooveWidth * grooveHeight) +
          2 * (sideBoxWidth * sideBoxHeight) +
          2 * (topAndBottomBoxWidth * topAndBottomBoxHeight)) /
        1000000;

      m2 += fullArea;
    }
  }

  return {
    m2,
  };
};
