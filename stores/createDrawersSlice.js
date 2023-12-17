const createDrawersSlice = (set, get) => ({
  drawers: {
    thickness: 18,
    thicknessBottom: 10,
    sinkingBottom: 10,
    grooveWidth: 50,
    frontHeight: 170,
    sideHeight: 140,
    gripGap: 30,
    frontGap: 4,
    dimensionsFromManual: {
      sideBoxToInsideDrawer: 24.5,
      bottomSideDrawerToBottomDrawer: 12,
      backBoxToBackDrawer: 10,
    },
    heightOfDrawers: {
      1: 240,
      2: 440,
      3: 640,
      4: 840,
    },
    slideReserve: 10,
    slideSizes: [250, 300, 350, 400, 450, 500, 550],
  },
});

export default createDrawersSlice;
