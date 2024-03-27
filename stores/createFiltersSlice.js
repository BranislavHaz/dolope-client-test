const createFiltersSlice = (set, get) => ({
  decorFilter: {
    corpus: {
      search: null,
      manufacturer: "All",
      decorType: "all",
    },
    sideWalls: {
      search: null,
      manufacturer: "All",
      decorType: "all",
    },
    doors: {
      search: null,
      manufacturer: "All",
      decorType: "all",
    },
  },

  activeDoorSection: {
    doorId: 1,
    sectionId: 1,
  },

  setDecorFilter: ({ type, search, manufacturer, decorType }) => {
    set(
      (state) => {
        if (!state.decorFilter[type]) return;

        if (search !== undefined) {
          state.decorFilter[type].search = search;
        }
        if (manufacturer !== undefined) {
          state.decorFilter[type].manufacturer = manufacturer;
        }
        if (decorType !== undefined) {
          state.decorFilter[type].decorType = decorType;
        }
      },
      false,
      "filters/setDecorFilter"
    );
  },

  setActiveDoorSection: ({ doorId, sectionId }) => {
    set(
      (state) => {
        state.activeDoorSection.doorId = doorId;
        state.activeDoorSection.sectionId = sectionId;
      },
      false,
      "filters/setActiveDoorSection"
    );
  },
});

export default createFiltersSlice;
