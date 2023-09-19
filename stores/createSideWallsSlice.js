const createSideWallsSlice = (set, get) => ({
  sideWalls: {
    cover: {
      left: false,
      right: false,
      count: 0,
    },

    stop: {
      width: 100,
      left: true,
      right: true,
      count: 1,
    },
  },

  setSideWalls: ({ sideWallsCover, sideWallsStop }) => {
    set(
      (state) => {
        state.sideWalls.cover = sideWallsCover;
        state.sideWalls.stop = {
          ...sideWallsStop,
          width: state.sideWalls.stop.width,
        };
      },
      false,
      "sideWalls/setSideWalls"
    );
  },
});

export default createSideWallsSlice;
