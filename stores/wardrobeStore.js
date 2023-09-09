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
    px: 0.1,
    sections: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    },
    hanger: { height: 30, topSpace: 60 },
    drawer: {
      thickness: 18,
      grooveWidth: 50,
      frontHeight: 170,
      gripGap: 30,
      frontGap: 4,
      heightDrawerCount: {
        1: 236,
        2: 436,
        3: 636,
        4: 836,
      },
    },

    calculateModuleWidth: (sectionsNumberValue = get().sectionsNumber) => {
      const { width, thickness } = get();
      const standsThickness = (sectionsNumberValue + 1) * thickness;
      return (width - standsThickness) / sectionsNumberValue;
    },

    calculatePX: () => {
      const { viewportSize, width, height } = get();
      if (viewportSize.width > viewportSize.height) {
        const value = viewportSize.height / 2 / height;
        return Math.round(value * 100) / 100;
      } else {
        const value = viewportSize.width / 1.3 / width;
        return Math.round(value * 100) / 100;
      }
    },
    updatePX: () => {
      const pxValue = get().calculatePX();
      set({ px: pxValue });
    },

    setWidth: (widthValue) => {
      const newModuleWidth = get().calculateModuleWidth();
      set({ width: widthValue, moduleWidth: newModuleWidth }), get().updatePX();
    },
    setHeight: (height) => {
      set({ height }), get().updatePX();
    },
    setDepth: (depth) => set({ depth }),
    setSectionsNumber: (sectionsNumberValue) => {
      const newModuleWidth = get().calculateModuleWidth(sectionsNumberValue);
      set({ sectionsNumber: sectionsNumberValue, moduleWidth: newModuleWidth });
    },
    setModuleWidth: (moduleWidth) => set({ moduleWidth }),
    setViewportSize: (viewport) => {
      set({ viewportSize: viewport }), get().updatePX();
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
