export const isBasicDataFilled = (state) => {
  const { wardrobe, corpus } = state;
  if (
    wardrobe?.width &&
    wardrobe?.height &&
    wardrobe?.depth &&
    wardrobe?.type &&
    corpus?.topShelfHeight
  ) {
    return true;
  }
  return false;
};
