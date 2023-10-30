export const calcSectionsWidth = (state, countOfSections) => {
  const { wardrobe, corpus } = state;

  const getCorpusAndSectionsWidth = (
    countOfStand,
    countOfSections,
    isBetweenWalls = false
  ) => {
    const standsThickness = countOfStand * wardrobe.thickness;
    let roughSectionWidth;

    if (isBetweenWalls) {
      const maxAvailableSpaceForSections =
        wardrobe.width - standsThickness - corpus.minWidthReserve;
      roughSectionWidth = Math.floor(
        maxAvailableSpaceForSections / countOfSections
      );
    } else {
      const availableSpace = wardrobe.width - standsThickness;
      roughSectionWidth = Math.floor(availableSpace / countOfSections);
    }

    return roughSectionWidth;
  };

  if (wardrobe.type === 1) {
    return getCorpusAndSectionsWidth(
      countOfSections + 1,
      countOfSections,
      true
    );
  } else if (wardrobe.type === 2 || wardrobe.type === 3) {
    return getCorpusAndSectionsWidth(countOfSections + 2, countOfSections);
  } else {
    return getCorpusAndSectionsWidth(countOfSections + 3, countOfSections);
  }
};
