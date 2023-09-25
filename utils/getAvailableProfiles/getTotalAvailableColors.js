import { getGlobalAvailableColors } from "./getGlobalAvailableColors";

export const getTotalAvailableColors = (state, typesConfig) => {
  let allColorsAvailable = {
    silver: true,
    champagne: true,
    white: true,
    black: true,
  };

  const colorsAvailable = getGlobalAvailableColors(state, typesConfig);

  colorsAvailable.forEach((colorObj) => {
    // Prechádza každým typom
    Object.values(colorObj).forEach((colors) => {
      // Prechádza každou farbou
      Object.entries(colors).forEach(([color, isAvailable]) => {
        if (!isAvailable) {
          allColorsAvailable[color] = false;
        }
      });
    });
  });

  return allColorsAvailable;
};
