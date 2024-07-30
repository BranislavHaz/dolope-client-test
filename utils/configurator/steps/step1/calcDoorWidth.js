export const calcDoorWidth = (state, countOfDoors) => {
  const { wardrobe } = state;
  const clearWidth = wardrobe.width - 2 * wardrobe.thickness;

  return (
    Math.round(
      ((clearWidth + (countOfDoors - 1) * 30) / countOfDoors / 10) * 10
    ) / 10
  );
};
