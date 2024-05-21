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

  setDecorFilter: ({ type, materialType, search, manufacturer, decorType }) => {
    set(
      (state) => {
        if (type === "corpus" || type === "sideWalls" || type === "doors") {
          if (materialType) {
            state.decorFilter[type].materialType = materialType;
          }
          if (search || search === null) {
            state.decorFilter[type].search = search;
          }
          if (manufacturer) {
            state.decorFilter[type].manufacturer = manufacturer;
          }
          if (decorType) {
            state.decorFilter[type].decorType = decorType;
          }
        } else return;
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
