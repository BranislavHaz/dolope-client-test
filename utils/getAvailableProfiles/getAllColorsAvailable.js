import { getGlobalAvailableColors } from "./getGlobalAvailableColors";

export const getAllColorsAvailable = (state, typesProfilesConfig) => {
  let allColorsAvailable = {
    silver: true,
    champagne: true,
    white: true,
    black: true,
  };

  const colorsAvailable = getGlobalAvailableColors(state, typesProfilesConfig);

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
