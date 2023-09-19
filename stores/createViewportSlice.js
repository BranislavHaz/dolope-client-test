import { calcViewportPX } from "@/utils/calcViewportPX";

const createViewportSlice = (set, get) => ({
  viewport: { width: 0, height: 0, px: 0.1, thickness: 34 },

  updateViewportPX: (nameOfAction) => {
    set(
      (state) => {
        state.viewport.px = calcViewportPX(state);
      },
      false,
      `${nameOfAction}/updateViewportPX`
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
  },
});

export default createViewportSlice;
