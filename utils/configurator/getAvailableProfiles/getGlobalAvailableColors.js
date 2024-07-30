export const getGlobalAvailableColors = (state, typesProfilesConfig) => {
  const colorsAvailable = [];

  typesProfilesConfig.forEach(({ profileType, minSize }) => {
    const products = state.productsAPI.slidingDoor[profileType];

    const colorsCount = {
      silver: 0,
      champagne: 0,
      white: 0,
      black: 0,
    };

    products.forEach((product) => {
      if (product.length * 1000 >= minSize && product.color) {
        colorsCount[product.color]++;
      }
    });

    colorsAvailable.push({
      [profileType]: {
        silver: colorsCount.silver > 0,
        champagne: colorsCount.champagne > 0,
        white: colorsCount.white > 0,
        black: colorsCount.black > 0,
      },
    });
  });

  return colorsAvailable;
};
