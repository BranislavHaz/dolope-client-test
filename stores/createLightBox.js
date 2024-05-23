const createLightBoxSlice = (set, get) => ({
  lightBox: {
    isActive: false,
    imgUrl: undefined,
  },

  setIsLightBoxImageUrl: (url) => {
    set(
      (state) => {
        state.lightBox.imgUrl = url;
      },
      false,
      "lightBox/setIsLightBoxImageUrl"
    );
  },

  setIsLightBoxActive: (value) => {
    set(
      (state) => {
        state.lightBox.isActive = value;
      },
      false,
      "lightBox/setIsLightBoxActive"
    );
  },
});

export default createLightBoxSlice;
