export const calcAreaShelfs = (state, partsOfModules) => {
  const { corpus, sections } = state;
  const { countOfShelfs, countOfShelfsExcenter } = partsOfModules;

  const shelfsWidth = sections.width - 1;
  const shelfsExcenterWidth = sections.width;
  const height = corpus.depth;

  const shelfsM2 = (shelfsWidth * height * countOfShelfs) / 1000000;
  const shelfsExcenterM2 =
    (shelfsExcenterWidth * height * countOfShelfsExcenter) / 1000000;

  return {
    area: {
      shelfs: shelfsM2 + shelfsExcenterM2,
    },
    parts: {
      shelfs: { width: shelfsWidth, height: height, count: countOfShelfs },
      shelfsExcenter: {
        width: shelfsExcenterWidth,
        height: height,
        count: countOfShelfsExcenter,
      },
    },
  };
};
