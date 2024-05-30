import { calcViewportPX } from "@/utils/calcViewportPX";
import { calcViewportSizes } from "@/utils/calcViewportSizes";

const createViewportSlice = (set, get) => ({
  viewport: { width: 0, height: 0, px: 0.1, thickness: 34 },
  viewportSizes: {
    wardrobe: {
      width: 0,
      height: 0,
      thicknessDTD: 0,
    },
    corpus: { height: 0 },
    section: { width: 0 },
    drawers: {
      height: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
      frontWidth: 0,
      frontHeight: 0,
      grooveWidth: 0,
      gripGap: 0,
      frontGap: 0,
    },
    rails: {
      top: {
        width: 0,
        height: 0,
      },
      bottom: {
        width: 0,
        height: 0,
      },
    },
    door: {
      width: 0,
      height: 0,
      profileHeight: 0,
    },
    modal: {
      elWidth: 0,
      elHeight: 0,
    },
  },

  updateViewportPX: (nameOfAction) => {
    set(
      (state) => {
        state.viewport.px = calcViewportPX(state);
      },
      false,
      `${nameOfAction}/updateViewportPX`
    );
  },

  updateViewportSizes: (nameOfAction) => {
    set(
      (state) => {
        state.viewportSizes = calcViewportSizes(state);
      },
      false,
      `${nameOfAction}/updateViewportSizes`
    );
  },

  setViewport: (updatedViewport) => {
    set(
      (state) => {
        state.viewport.width = updatedViewport.width;
        state.viewport.height = updatedViewport.height;
      },
      false,
      "viewport/setViewport"
    );
    get().updateViewportPX("viewport");
    get().updateViewportSizes("viewport");
  },
});

export default createViewportSlice;
