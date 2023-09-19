export const calcAreaDrawersBox = (state, partsOfModules) => {
  const { wardrobe, corpus, sections, drawers } = state;
  const { arrOfDrawers } = partsOfModules;
  let m2 = 0;
  let parts = [];

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
      const sideBoxHeight = corpus.depth - wardrobe.thickness;

      // Dno a vrch zásuvkového boxu
      const topAndBottomBoxWidth = sections.width - 2 * drawers.grooveWidth;
      const topAndBottomBoxHeight = corpus.depth;

      const fullArea =
        (2 * (grooveWidth * grooveHeight) +
          2 * (sideBoxWidth * sideBoxHeight) +
          2 * (topAndBottomBoxWidth * topAndBottomBoxHeight)) /
        1000000;

      m2 += fullArea;

      parts.push({
        groove: {
          width: grooveWidth,
          height: grooveHeight,
          count: 2,
        },
        sideBox: {
          width: sideBoxWidth,
          height: sideBoxHeight,
          count: 2,
        },
        topAndBottomBox: {
          width: topAndBottomBoxWidth,
          height: topAndBottomBoxHeight,
          count: 2,
        },
      });
    }
  }

  return {
    area: {
      drawersBox: m2,
    },
    parts: { drawersBox: parts },
  };
};
