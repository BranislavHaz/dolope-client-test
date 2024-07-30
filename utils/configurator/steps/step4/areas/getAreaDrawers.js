import { getMaxSlideSize } from "../getMaxSlideSize";

const countDrawersSectionsType = {
  6: 2,
  7: 3,
  8: 3,
  9: 4,
  10: 4,
  11: 2,
  12: 2,
  13: 3,
  14: 3,
  15: 4,
  16: 4,
  22: 2,
  23: 3,
  24: 4,
};

const getDecorIdCheapestDTD10 = (state) => {
  const decors = state.productsAPI.dtd10;

  const cheapest = decors.reduce((min, decor) => {
    if (Number(decor.price_with_vat) < Number(min.price_with_vat)) {
      return decor;
    }
    return min;
  });

  return cheapest.id;
};

export const getAreaDrawers = (state) => {
  const sectionsCount = state.sections.count;
  const slideSize = getMaxSlideSize(state);
  const drawersDecorId = state.corpus.decorId;
  const bottomDecorId = getDecorIdCheapestDTD10(state);

  let fullAreaDrawers = 0; // v M2
  let fullAreaBottoms = 0; // v M2

  for (let i = 1; i <= sectionsCount; i++) {
    const sectionType = state.sections.typeOfSections[i].sectionType;

    if (countDrawersSectionsType[sectionType]) {
      const drawersCount = countDrawersSectionsType[sectionType];

      // Box pre výsuvy
      const boxSideWidth = state.corpus.depth - state.drawers.thickness;
      const boxSideHeight = state.drawers.heightOfDrawers[drawersCount];
      const boxGrooveWidth = 70; // šírka krycej lišty
      const boxGrooveHeight = boxSideHeight;
      const boxTopBottomWidth = state.sections.width - 2 * boxGrooveWidth;
      const boxTopBottomHeight = state.corpus.depth;

      // 1 výsuv
      const frontWidth = boxTopBottomWidth - 2 * state.drawers.frontGap;
      const frontHeight = state.drawers.frontHeight;
      const frontBackWidth = boxTopBottomWidth - 50; // 50 mm z manuálu
      const frontBackHeight = state.drawers.sideHeight - 20; // 10 mm z manuálu + 10 mm dno
      const sideWidth = slideSize - 10; // 10 mm z manuálu
      const sideHeight = state.drawers.sideHeight;
      const bottomWidth = frontBackWidth + 2 * 8; // 8 mm drážka v bočnicach
      const bottomHeight = sideWidth;

      // Výpočet plochy pre box
      const boxAreaMM2 =
        (boxSideWidth * boxSideHeight +
          boxGrooveWidth * boxGrooveHeight +
          boxTopBottomWidth +
          boxTopBottomHeight) *
        2;
      const boxAreaM2 = boxAreaMM2 / 1000000;

      // Výpočet plochy pre výsuvy
      const drawersAreaMM2 =
        (frontWidth * frontHeight +
          (frontBackWidth * frontBackHeight + sideWidth * sideHeight) * 2) *
        drawersCount;
      const drawersAreaM2 = drawersAreaMM2 / 1000000;

      // Výpočet plochy pre dna
      const bottomAreaMM2 = bottomWidth * bottomHeight * drawersCount;
      const bottomAreaM2 = bottomAreaMM2 / 1000000;

      fullAreaDrawers += Number(boxAreaM2) + Number(drawersAreaM2);
      fullAreaBottoms += Number(bottomAreaM2);
    }
  }

  return {
    [drawersDecorId]: { area: +fullAreaDrawers.toFixed(3), type: "wood" },
    [bottomDecorId]: { area: +fullAreaBottoms.toFixed(3), type: "wood" },
  };
};
