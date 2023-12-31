const calcNumOfSideWallsParts = (wardrobe) => {
  const { type } = wardrobe;

  if (type === 1) return { numOfSideWallsStop: 2, numOfSideWallsCover: 0 };
  else if (type === 2 || type === 3)
    return { numOfSideWallsStop: 1, numOfSideWallsCover: 1 };
  else return { numOfSideWallsStop: 0, numOfSideWallsCover: 2 };
};

export const calcAreaStandsAndSideWalls = (state) => {
  const { wardrobe, sideWalls, corpus, sections } = state;

  const numOfStands = sections.count + 1;
  const { numOfSideWallsStop, numOfSideWallsCover } =
    calcNumOfSideWallsParts(wardrobe);

  const standsM2 = numOfStands
    ? (corpus.height * corpus.depth * numOfStands) / 1000000
    : 0;
  const sideWallsStopM2 = numOfSideWallsStop
    ? (wardrobe.height * sideWalls.stop.width * numOfSideWallsStop) / 1000000
    : 0;
  const sideWallsCoverM2 = numOfSideWallsCover
    ? (wardrobe.height * wardrobe.depth * numOfSideWallsCover) / 1000000
    : 0;

  return {
    area: {
      stands: standsM2,
      sideWalls: sideWallsStopM2 + sideWallsCoverM2,
    },
    parts: {
      stands: {
        width: corpus.height,
        height: corpus.depth,
        count: numOfStands,
      },
      sideWallStop: {
        width: wardrobe.height,
        height: sideWalls.stop.width,
        count: numOfSideWallsStop,
      },
      sideWallsCover: {
        width: wardrobe.height,
        height: wardrobe.depth,
        count: numOfSideWallsCover,
      },
    },
  };
};
