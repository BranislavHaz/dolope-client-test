export const calcViewportPX = (state) => {
  const { viewport, wardrobe } = state;

  const wrapperWidth = viewport.width;
  const wrapperHeight = viewport.height * 0.42;
  const wardrobeWidth = wardrobe.width;
  const wardrobeHeight = wardrobe.height;

  const maxWidth = wrapperWidth * 0.85;
  const maxHeight = wrapperHeight * 0.85;

  const width = maxWidth / wardrobeWidth;
  const height = maxHeight / wardrobeHeight;

  const pxNum = Math.min(width, height);

  return Math.round(pxNum * 100) / 100;
};
