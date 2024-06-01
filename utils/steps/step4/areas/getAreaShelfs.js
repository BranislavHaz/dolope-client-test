const countShelfsSectionsType = {
  1: 3,
  2: 4,
  3: 5,
  4: 6,
  5: 7,
  6: 7,
  7: 6,
  8: 7,
  9: 5,
  10: 6,
  11: 5,
  12: 6,
  13: 4,
  14: 5,
  15: 4,
  16: 5,
  17: 3,
  18: 4,
  19: 5,
  20: 4,
  21: 5,
  22: 4,
  23: 3,
  24: 3,
  25: 3,
  26: 3,
  27: 4,
  28: 4,
  29: 4,
  30: 4,
  31: 3,
  32: 3,
  33: 4,
  34: 4,
  35: 4,
  36: 5,
  37: 5,
  38: 3,
  39: 4,
};

export const getAreaShelfs = (state) => {
  const shelfsDecorId = state.corpus.decorId;
  const sectionsCount = state.sections.count;
  const shelfsWidth = state.sections.width;
  const shelfsHeight = state.corpus.depth;

  let shelfsCount = 0;

  for (let i = 1; i <= sectionsCount; i++) {
    const sectionType = state.sections.typeOfSections[i].sectionType;
    const shelfsCountType = countShelfsSectionsType[sectionType];
    shelfsCount = shelfsCount + shelfsCountType;
  }

  const fullAreaMM2 = shelfsCount * shelfsWidth * shelfsHeight;
  const fullAreaM2 = (fullAreaMM2 / 1000000).toFixed(3);

  return { [shelfsDecorId]: { area: +fullAreaM2, type: "wood" } };
};
