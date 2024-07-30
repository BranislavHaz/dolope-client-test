import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import createViewportSlice from "./configurator/createViewportSlice";
import createWardrobeSlice from "./configurator/createWardrobeSlice";
import createCorpusSlice from "./configurator/createCorpusSlice";
import createRailsSlice from "./configurator/createRailsSlice";
import createSideWallsSlice from "./configurator/createSideWallsSlice";
import createSectionsSlice from "./configurator/createSectionsSlice";
import createHangersSlice from "./configurator/createHangersSlice";
import createDrawersSlice from "./configurator/createDrawersSlice";
import createDoorsSlice from "./configurator/createDoorsSlice";

import createAreaPartsSlice from "./configurator/createAreaPartsSlice";

import createProductsApiSlice from "./configurator/createProductsApiSlice";

import createStepsSlice from "./configurator/createStepsSlice";

import createModalSlice from "./configurator/createModalSlice";

import createFiltersSlice from "./configurator/createFiltersSlice";

import createLightBoxSlice from "./configurator/createLightBox";

import createMobileMenuSlice from "./web/createMobileMenuSlice";

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

    ...createDoorsSlice(...a),

    ...createAreaPartsSlice(...a),

    ...createProductsApiSlice(...a),

    ...createStepsSlice(...a),

    ...createModalSlice(...a),
    ...createFiltersSlice(...a),

    ...createLightBoxSlice(...a),

    ...createMobileMenuSlice(...a),
  }))
);

export default useMainStore;
