export const calcCorpusAndSectionsWidth = (state) => {
  const { wardrobe, corpus, sections } = state;

  const getCorpusAndSectionsWidth = (numOfStands, isBetweenWalls = false) => {
    const standsThickness = numOfStands * wardrobe.thickness;
    let roughSectionWidth;

    if (isBetweenWalls) {
      const maxAvailableSpaceForSections =
        wardrobe.width - standsThickness - corpus.minWidthReserve;
      roughSectionWidth = Math.floor(
        maxAvailableSpaceForSections / sections.count
      );
    } else {
      const availableSpace = wardrobe.width - standsThickness;
      roughSectionWidth = Math.floor(availableSpace / sections.count);
    }

    return {
      corpusWidth: roughSectionWidth * sections.count + standsThickness,
      sectionsWidth: roughSectionWidth,
    };
  };

  if (wardrobe.type === 1) {
    return getCorpusAndSectionsWidth(sections.count + 1, true);
  } else if (wardrobe.type === 2 || wardrobe.type === 3) {
    return getCorpusAndSectionsWidth(sections.count + 2);
  } else {
    return getCorpusAndSectionsWidth(sections.count + 3);
  }
};
