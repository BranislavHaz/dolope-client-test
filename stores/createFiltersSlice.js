const createFiltersSlice = (set, get) => ({
  decorFilter: {
    corpus: {
      search: null,
      manufacturer: null,
      decorType: null,
    },
    wardrobe: {
      search: null,
      manufacturer: null,
      decorType: null,
    },
    doors: {
      search: null,
      manufacturer: null,
      decorType: null,
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
