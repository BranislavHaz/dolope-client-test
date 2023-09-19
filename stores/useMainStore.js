import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import createViewportSlice from "./createViewportSlice";
import createWardrobeSlice from "./createWardrobeSlice";
import createCorpusSlice from "./createCorpusSlice";
import createRailsSlice from "./createRailsSlice";
import createSideWallsSlice from "./createSideWallsSlice";
import createSectionsSlice from "./createSectionsSlice";
import createHangersSlice from "./createHangersSlice";
import createDrawersSlice from "./createDrawersSlice";

import createAreaPartsSlice from "./createAreaPartsSlice";

const createStore = (createStoreFn) => {
  const devtoolsEnhancer = devtools(createStoreFn);
  return immer(devtoolsEnhancer);
};

const useMainStore = create(
  createStore((...a) => ({
    ...createViewportSlice(...a),
    ...createWardrobeSlice(...a),
    ...createCorpusSlice(...a),
    ...createRailsSlice(...a),
    ...createSideWallsSlice(...a),
    ...createSectionsSlice(...a),
    ...createHangersSlice(...a),
    ...createDrawersSlice(...a),

    ...createAreaPartsSlice(...a),
  }))
);

export default useMainStore;