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

    decorId: null,
  },

  updateSideWalls: (nameOfAction) => {
    const typeOfWardrobe = get().wardrobe.type;
    const width = get().sideWalls.stop.width;

    set(
      (state) => {
        switch (typeOfWardrobe) {
          case 1:
            state.sideWalls.cover = { left: false, right: false, count: 0 };
            state.sideWalls.stop = { width, left: true, right: true, count: 2 };
            break;

          case 2:
            state.sideWalls.cover = { left: false, right: true, count: 1 };
            state.sideWalls.stop = {
              width,
              left: true,
              right: false,
              count: 1,
            };
            break;

          case 3:
            state.sideWalls.cover = { left: true, right: false, count: 1 };
            state.sideWalls.stop = {
              width,
              left: false,
              right: true,
              count: 1,
            };
            break;

          case 4:
            state.sideWalls.cover = { left: true, right: true, count: 2 };
            state.sideWalls.stop = {
              width,
              left: false,
              right: false,
              count: 0,
            };
            break;

          default:
            break;
        }
      },
      false,
      `${nameOfAction}/updateSideWalls`
    );
  },

  setSideWallsDecorId: (decorId) => {
    set(
      (state) => {
        state.sideWalls.decorId = decorId;
      },
      false,
      "sideWalls/setSideWallsDecorId"
    );
  },

  setSideWallsDefaultValues: (nameOfAction) => {
    set(
      (state) => {
        state.sideWalls = {
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

          decorId: null,
        };
      },
      false,
      `${nameOfAction}/setSideWallsDefaultValues`
    );
  },
});

export default createSideWallsSlice;
