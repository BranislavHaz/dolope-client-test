export const calcViewportPX = (state) => {
  const { viewport, wardrobe } = state;

  if (viewport.width > viewport.height) {
    const value = viewport.height / 2 / wardrobe.height;
    return Math.round(value * 100) / 100;
  } else {
    const value = viewport.width / 1.3 / wardrobe.width;
    return Math.round(value * 100) / 100;
  }
};
