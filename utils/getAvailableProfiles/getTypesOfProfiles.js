import { getTotalAvailableColors } from "./getTotalAvailableColors";
import { filterHandlesByWheelAvailability } from "./filterHandlesByWheelAvailability";
import { getHandlesWithAvailableColors } from "./getHandlesWithAvailableColors";

export const getTypesOfProfiles = (state) => {
  const { wardrobe, doors } = state;
  const clearDoorsWidth = wardrobe.width - 2 * wardrobe.thickness;

  const typesConfig = [
    { type: "topGuideProfiles", minSize: clearDoorsWidth },
    { type: "bottomGuideProfiles", minSize: clearDoorsWidth },
    { type: "topHorizontProfiles", minSize: doors.width },
    { type: "bottomHorizontProfiles", minSize: doors.width },
    { type: "hProfiles", minSize: doors.width },
  ];

  const allColorsAvailable = getTotalAvailableColors(state, typesConfig);
  const handlesWithColors = getHandlesWithAvailableColors(
    state,
    allColorsAvailable
  );
  const handlesWithWheels = filterHandlesByWheelAvailability(
    state,
    handlesWithColors
  );

  return handlesWithWheels;
};
