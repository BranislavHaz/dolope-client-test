export const calcViewportPX = (viewport, wardrobe) => {
  if (viewport.width > viewport.height) {
    const value = viewport.height / 2 / wardrobe.height;
    return Math.round(value * 100) / 100;
  } else {
    const value = viewport.width / 1.3 / wardrobe.width;
    return Math.round(value * 100) / 100;
  }
};

export const calcCorpusWidth = (newWidth, wardrobe) => {
  if (wardrobe.type === 2 || wardrobe.type === 3) {
    return newWidth - wardrobe.thickness;
  } else if (wardrobe.type === 4) {
    return newWidth - 2 * wardrobe.thickness;
  } else {
    return newWidth;
  }
};
