export const calcViewportPX = (viewport, wardrobe) => {
  if (viewport.width > viewport.height) {
    const value = viewport.height / 2 / wardrobe.height;
    return Math.round(value * 100) / 100;
  } else {
    const value = viewport.width / 1.3 / wardrobe.width;
    return Math.round(value * 100) / 100;
  }
};

export const calcCorpusAndSectionsWidth = (sections, wardrobe) => {
  const minCorpusWidthReserve = 8;

  const getCorpusAndSectionsWidth = (numOfStands, isBetweenWalls = false) => {
    const standsThickness = numOfStands * wardrobe.thickness;
    let roughSectionWidth;

    if (isBetweenWalls) {
      const maxAvailableSpaceForSections =
        wardrobe.width - standsThickness - minCorpusWidthReserve;
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
