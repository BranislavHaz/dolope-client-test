import { calcCorpusAndSectionsWidth } from "@/utils/configurator/calcCorpusAndSectionsWidth";

const createSectionsSlice = (set, get) => ({
  sections: {
    width: 931,
    count: 0,
    typeOfSections: {},
    minWidth: 450,
    maxWidth: 1000,
  },

  setSectionsDefaultValues: (nameOfAction) => {
    set(
      (state) => {
        state.sections = {
          width: 931,
          count: 0,
          typeOfSections: {},
          minWidth: 450,
          maxWidth: 1000,
        };
      },
      false,
      `${nameOfAction}/updateSectionsWidth`
    );
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
    get().updateViewportSizes("sections");
  },

  setTypeOfSections: ({ sectionId, sectionType, variableHeight = false }) => {
    set(
      (state) => {
        state.sections.typeOfSections = {
          ...state.sections.typeOfSections,
          [sectionId]: { sectionType, variableHeight },
        };
      },
      false,
      "sections/setTypeOfSections"
    );
  },
});

export default createSectionsSlice;
