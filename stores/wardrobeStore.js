import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useWardrobeStore = create(
  devtools((set, get) => ({
    width: 2865,
    height: 2603,
    depth: 600,
    thickness: 18,
    viewport: { width: 0, height: 0, px: 0.1 },
    sections: {
      width: 931,
      height: 2300,
      count: 3,
      typeOfSections: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
    },
    hangers: { height: 30, topSpace: 60 },
    drawers: {
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

    calcSectionsWidth: (sectionsNum = get().sections.count) => {
      const { width, thickness } = get();
      const standsThickness = (sectionsNum + 1) * thickness;
      return (width - standsThickness) / sectionsNum;
    },

    calcViewportPX: () => {
      const { viewport, width, height } = get();
      if (viewport.width > viewport.height) {
        const value = viewport.height / 2 / height;
        return Math.round(value * 100) / 100;
      } else {
        const value = viewport.width / 1.3 / width;
        return Math.round(value * 100) / 100;
      }
    },
    updateViewportPX: () => {
      const pxValue = get().calcViewportPX();
      set({
        viewport: {
          ...get().viewport,
          px: pxValue,
        },
      });
    },

    setWidth: (widthValue) => {
      const newModuleWidth = get().calcSectionsWidth();
      set({
        width: widthValue,
        sections: {
          ...get().sections,
          width: newModuleWidth,
        },
      }),
        get().updateViewportPX();
    },
    setHeight: (height) => {
      set({ height }), get().updateViewportPX();
    },
    setSectionsCount: (sectionsCount) => {
      const newModuleWidth = get().calcSectionsWidth(sectionsCount);
      set({
        sections: {
          ...get().sections,
          width: newModuleWidth,
          count: sectionsCount,
        },
      });
    },
    setViewport: (viewport) => {
      set({ viewport: viewport }), get().updateViewportPX();
    },

    setSections: (id, sectionType) =>
      set((state) => ({
        sections: {
          ...state.sections,
          typeOfSections: {
            ...state.sections.typeOfSections,
            [id]: sectionType,
          },
        },
      })),
  }))
);

export default useWardrobeStore;
