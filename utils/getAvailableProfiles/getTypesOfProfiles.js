import { getTotalAvailableColors } from "./getTotalAvailableColors";
import { filterHandlesByWheelAvailability } from "./filterHandlesByWheelAvailability";
import { getHandlesWithAvailableColors } from "./getHandlesWithAvailableColors";

export const getTypesOfProfiles = (state) => {
  const { wardrobe, doors } = state;
  const clearDoorsWidth = wardrobe.width - 2 * wardrobe.thickness;

  const typesProfilesConfig = [
    { profileType: "topGuideProfiles", minSize: clearDoorsWidth },
    { profileType: "bottomGuideProfiles", minSize: clearDoorsWidth },
    { profileType: "topHorizontProfiles", minSize: doors.width },
    { profileType: "bottomHorizontProfiles", minSize: doors.width },
    { profileType: "hProfiles", minSize: doors.width },
  ];

  const allColorsAvailable = getTotalAvailableColors(
    state,
    typesProfilesConfig
  );
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
