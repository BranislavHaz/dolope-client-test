import { calcViewportPX } from "@/utils/calcViewportPX";
import { calcViewportSizes } from "@/utils/calcViewportSizes";

const createViewportSlice = (set, get) => ({
  viewport: { width: 0, height: 0, px: 0.1, thickness: 34 },
  viewportSizes: {
    thicknessDtd: 0,
    widthWardrobe: 0,
    heightWardrobe: 0,
    heightCorpus: 0,
    widthSection: 0,
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
