const createWardrobeSlice = (set, get) => ({
  wardrobe: {
    width: 0,
    height: 0,
    depth: 0,
    thickness: 18,
    type: 0,
  },

  /*
    type
    1 = medzi stenami
    2 = stena vľavo
    3 = stena vpravo
    4 = v priestore
    */

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
    get().updateViewportSizes("wardrobe");
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
    get().updateViewportSizes("wardrobe");
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
    get().updateViewportSizes("wardrobe");
  },
});

export default createWardrobeSlice;
