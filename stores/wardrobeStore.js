import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useWardrobeStore = create(
  devtools((set, get) => ({
    width: 2865,
    height: 2603,
    depth: 600,
    thickness: 18,
    sectionsNumber: 3,
    moduleWidth: 931,
    moduleHeight: 2300,
    viewportSize: { width: 0, height: 0 },
    mm: 0,
    hangerHeight: 30,
    hangerSpace: 60,
    sections: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    },
    drawers: {
      thickness: 18,
      grooveWidth: 50,
      frontHeight: 170,
      gripGap: 30,
      frontGap: 4,

      drawerSingleHeight: 236,
    },

    calculateModuleWidth: (sectionsNumberValue = get().sectionsNumber) => {
      const { width, thickness } = get();
      const standsThickness = (sectionsNumberValue + 1) * thickness;
      return (width - standsThickness) / sectionsNumberValue;
    },

    calculateMM: () => {
      const { viewportSize, width, height } = get();
      if (viewportSize.width > viewportSize.height) {
        const value = viewportSize.height / 2 / height;
        return Math.round(value * 100) / 100;
      } else {
        const value = viewportSize.width / 1.3 / width;
        return Math.round(value * 100) / 100;
      }
    },
    updateMM: () => {
      const mmValue = get().calculateMM();
      set({ mm: mmValue });
    },

    setWidth: (widthValue) => {
      const newModuleWidth = get().calculateModuleWidth();
      set({ width: widthValue, moduleWidth: newModuleWidth }), get().updateMM();
    },
    setHeight: (height) => {
      set({ height }), get().updateMM();
    },
    setDepth: (depth) => set({ depth }),
    setSectionsNumber: (sectionsNumberValue) => {
      const newModuleWidth = get().calculateModuleWidth(sectionsNumberValue);
      set({ sectionsNumber: sectionsNumberValue, moduleWidth: newModuleWidth });
    },
    setModuleWidth: (moduleWidth) => set({ moduleWidth }),
    setViewportSize: (viewport) => {
      set({ viewportSize: viewport }), get().updateMM();
    },

    setSections: (id, sectionValue) =>
      set((state) => ({
        sections: {
          ...state.sections,
          [id]: sectionValue,
        },
      })),
  }))
);

export default useWardrobeStore;
