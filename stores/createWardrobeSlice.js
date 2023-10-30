const createWardrobeSlice = (set, get) => ({
  wardrobe: {
    width: 2865,
    height: 2603,
    depth: 600,
    thickness: 18,
    type: 0,
  },

  setWardrobeWidth: (widthValue) => {
    set(
      (state) => {
        state.wardrobe.width = widthValue;
      },
      false,
      "wardrobe/setWardrobeWidth"
    );
    get().updateCorpusWidth("wardrobe");
    get().updateSectionsWidth("wardrobe");
    get().updateViewportPX("wardrobe");
    get().updateAreaParts("wardrobe");
  },

  setWardrobeHeight: (heightValue) => {
    set(
      (state) => {
        state.wardrobe.height = heightValue;
      },
      false,
      "wardrobe/setWardrobeHeight"
    );
    get().updateCorpusHeight("wardrobe");
    get().updateViewportPX("wardrobe");
  },

  setWardrobeDepth: (depthValue) => {
    set(
      (state) => {
        state.wardrobe.depth = depthValue;
      },
      false,
      "wardrobe/setWardrobeDepth"
    );
    get().updateCorpusDepth("wardrobe");
  },

  setWardrobeType: (valueOfType) => {
    set(
      (state) => {
        state.wardrobe.type = valueOfType;
      },
      false,
      "wardrobe/setWardrobeType"
    );
    get().updateCorpusWidth("wardrobe");
    get().updateSectionsWidth("wardrobe");
    get().updateSideWalls("wardrobe");
  },
});

export default createWardrobeSlice;
