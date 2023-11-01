import { calcCorpusAndSectionsWidth } from "@/utils/calcCorpusAndSectionsWidth";

const createSectionsSlice = (set, get) => ({
  sections: {
    width: 931,
    count: 3,
    typeOfSections: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    },
    minWidth: 450,
    maxWidth: 1000,
  },

  updateSectionsWidth: (nameOfAction) => {
    set(
      (state) => {
        const { sectionsWidth } = calcCorpusAndSectionsWidth(state);
        state.sections.width = sectionsWidth;
      },
      false,
      `${nameOfAction}/updateSectionsWidth`
    );
  },

  setSectionsCount: (sectionsCount) => {
    set(
      (state) => {
        state.sections.count = sectionsCount;
      },
      false,
      "sections/setSectionsCount"
    );
    get().updateCorpusWidth("sections");
    get().updateSectionsWidth("sections");
  },

  setSectionsType: (id, sectionType) =>
    set(
      (state) => {
        state.sections.typeOfSections[id] = sectionType;
      },
      false,
      "sections/setSectionsType"
    ),
});

export default createSectionsSlice;
