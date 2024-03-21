const createFiltersSlice = (set, get) => ({
  decorFilter: {
    corpus: {
      search: null,
      manufacturer: "All",
      decorType: "all",
    },
    wardrobe: {
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
});

export default createFiltersSlice;
