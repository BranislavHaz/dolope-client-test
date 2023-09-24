const getGlobalAvailableColors = (state, configurations) => {
  const colorMapping = {
    striebro: "silver",
    šampaň: "champagne",
    "biela lesklá": "white",
    "čierna matná": "black",
  };

  const colorsAvailable = [];

  configurations.forEach(({ type, minSize }) => {
    const products = state.productsAPI.slidingDoor[type];

    const colorsCount = {
      silver: 0,
      champagne: 0,
      white: 0,
      black: 0,
    };

    products.forEach((product) => {
      if (product.length * 1000 >= minSize && colorMapping[product.color]) {
        colorsCount[colorMapping[product.color]]++;
      }
    });

    colorsAvailable.push({
      [type]: {
        silver: colorsCount.silver > 0,
        champagne: colorsCount.champagne > 0,
        white: colorsCount.white > 0,
        black: colorsCount.black > 0,
      },
    });
  });

  return colorsAvailable;
};

export const getTypesOfProfiles = (state) => {
  const { wardrobe, doors } = state;
  const clearDoorsWidth = wardrobe.width - 2 * wardrobe.thickness;
  const clearDoorsHeight = wardrobe.height - 44;

  const typesConfig = [
    { type: "topGuideProfiles", minSize: clearDoorsWidth },
    { type: "bottomGuideProfiles", minSize: clearDoorsWidth },
    { type: "topHorizontProfiles", minSize: doors.width },
    { type: "bottomHorizontProfiles", minSize: doors.width },
    { type: "hProfiles", minSize: doors.width },
  ];

  let allColorsAvailable = {
    silver: true,
    champagne: true,
    white: true,
    black: true,
  };

  const colorsAvailable = getGlobalAvailableColors(state, typesConfig);

  colorsAvailable.forEach((colorObj) => {
    // Prechádza každým typom (napr. topGuideProfiles, bottomGuideProfiles, atď.)
    Object.values(colorObj).forEach((colors) => {
      // Prechádza každou farbou (silver, champagne, white, black)
      Object.entries(colors).forEach(([color, isAvailable]) => {
        if (!isAvailable) {
          allColorsAvailable[color] = false;
        }
      });
    });
  });

  return allColorsAvailable;
};
