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

  return { [shelfsDecorId]: Number(fullAreaM2) };
};
