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
      materialType: "wood",
      search: null,
      manufacturer: "All",
      decorType: "all",
      glassType: "all",
    },
  },

  activeDoorSection: {
    doorId: 1,
    sectionId: 1,
  },

  setMaterialType: ({ type }) => {
    set(
      (state) => {
        state.decorFilter.doors.materialType = type;
      },
      false,
      "filters/setMaterialType"
    );
  },

  setDecorFilter: ({
    type,
    search,
    manufacturer,
    decorType,
    materialType = undefined,
    glassType = undefined,
  }) => {
    set(
      (state) => {
        if (!state.decorFilter[type]) return;

        if (materialType !== undefined) {
          state.decorFilter.doors.materialType = materialType;
        }

        if (glassType !== undefined) {
          state.decorFilter.doors.glassType = glassType;
        }

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

  setFilterDefaultValues: (nameOfAction) => {
    set(
      (state) => {
        (state.decorFilter = {
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
            materialType: "wood",
            search: null,
            manufacturer: "All",
            decorType: "all",
            glassType: "all",
          },
        }),
          (state.activeDoorSection = {
            doorId: 1,
            sectionId: 1,
          });
      },
      false,
      `${nameOfAction}/setFilterDefaultValues`
    );
  },
});

export default createFiltersSlice;
