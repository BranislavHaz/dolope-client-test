export const getMaxSlideSize = (state) => {
  const corpusDepth = state.corpus.depth;
  const manualReserve = 8;
  const frontThickness = state.drawers.thickness;
  const availableSpace = corpusDepth - manualReserve - frontThickness;
  const slideSizes = state.drawers.slideSizes;

  const maxSlideSize = slideSizes.reduce((maxSize, size) => {
    // Ak je aktuálna veľkosť menšia alebo rovná availableSpace a je väčšia ako akákoľvek predchádzajúca hodnota maxSize, vráť túto hodnotu
    if (size <= availableSpace && size > maxSize) {
      return size;
    } else {
      return maxSize;
    }
  }, 0);

  return maxSlideSize;
};
