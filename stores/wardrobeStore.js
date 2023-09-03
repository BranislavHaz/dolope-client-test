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
    section1: 0,
    section2: 0,
    section3: 0,
    section4: 0,

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

    setSection1: (section1) => set({ section1 }),
    setSection2: (section2) => set({ section2 }),
    setSection3: (section3) => set({ section3 }),
    setSection4: (section4) => set({ section4 }),
  }))
);

export default useWardrobeStore;
