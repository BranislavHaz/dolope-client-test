import { colorProfilesMapping } from "@/constants/colorProfilesMapping";

export const getGlobalAvailableColors = (state, configurations) => {
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
      if (
        product.length * 1000 >= minSize &&
        colorProfilesMapping[product.color]
      ) {
        colorsCount[colorProfilesMapping[product.color]]++;
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
