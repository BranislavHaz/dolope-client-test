import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useWardrobeStore = create(
  devtools((set, get) => ({
    width: 2865,
    height: 2603,
    depth: 600,
    thickness: 18,
    modules: 3,
    moduleWidth: 931,
    moduleHeight: 2300,
    viewportSize: { width: 0, height: 0 },
    mm: 0,

    calculateMM: () => {
      const { viewportSize, width, height } = get();
      if (viewportSize.width > viewportSize.height) {
        return viewportSize.height / 2 / height;
      } else {
        return viewportSize.width / 1.3 / width;
      }
    },
    updateMM: () => {
      const mmValue = get().calculateMM();
      set({ mm: mmValue });
    },

    setWidth: (width) => {
      set({ width }), get().updateMM();
    },
    setHeight: (height) => {
      set({ height }), get().updateMM();
    },
    setDepth: (depth) => set({ depth }),
    setModules: (modules) => set({ modules }),
    setModuleWidth: (moduleWidth) => set({ moduleWidth }),
    setViewportSize: (viewport) => {
      set({ viewportSize: viewport }), get().updateMM();
    },
  }))
);

export default useWardrobeStore;
