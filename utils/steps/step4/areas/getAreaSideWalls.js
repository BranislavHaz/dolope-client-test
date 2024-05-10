export const getAreaSideWalls = (state) => {
  const sideWallsDecorId = state.sideWalls.decorId;
  const coverWallCount = state.sideWalls.cover.count;
  const stopWallCount = state.sideWalls.stop.count;
  const sideWallsHeight = state.wardrobe.height;
  const coverWallWidth = state.wardrobe.depth;
  const stopWallWidth = 100; // 10 cm šírka dorazovej lišty
  const coverWallArea = coverWallCount * sideWallsHeight * coverWallWidth; // v mm2
  const stopWallArea = stopWallCount * sideWallsHeight * stopWallWidth; // v mm2
  const fullArea = ((coverWallArea + stopWallArea) / 1000000).toFixed(3); // v m2

  return { [sideWallsDecorId]: Number(fullArea) };
};
