export const calcDoorsSize = (state) => {
  const { wardrobe, doors } = state;
  const countOfDoors = doors.count;
  const clearWidth = wardrobe.width - 2 * wardrobe.thickness;
  const doorOverhang =
    doors.dimensionsFromManual.doorOverhang[doors.typeOfProfiles.handle];
  const widthOfDoors = Math.ceil(
    (clearWidth + (countOfDoors - 1) * doorOverhang) / countOfDoors
  );
  const heightOfDoors = wardrobe.height - 44;

  return { width: widthOfDoors, height: heightOfDoors };
};
