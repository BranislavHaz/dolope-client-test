import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useWardrobeStore = create(
  devtools((set, get) => ({
    viewport: { width: 0, height: 0, px: 0.1 },
    wardrobe: {
      width: 2865,
      height: 2603,
      depth: 600,
      thickness: 18,
    },
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
      heightOfDrawers: {
        1: 236,
        2: 436,
        3: 636,
        4: 836,
      },
    },

    /* VIEWPORT */
    // Helpers function for set viewport size
    calcViewportPX: () => {
      const { viewport, wardrobe } = get();

      if (viewport.width > viewport.height) {
        const value = viewport.height / 2 / wardrobe.height;

        return Math.round(value * 100) / 100;
      } else {
        const value = viewport.width / 1.3 / wardrobe.width;

        return Math.round(value * 100) / 100;
      }
    },

    updateViewportPX: () => {
      const pxValue = get().calcViewportPX();

      set((state) => ({
        viewport: {
          ...state.viewport,
          px: pxValue,
        },
      }));
    },

    // Set viewport
    setViewport: (viewport) => {
      set({ viewport: viewport });
      get().updateViewportPX();
    },

    /* WARDROBE */
    // Set wardrobe width
    setWidth: (widthValue) => {
      const newModuleWidth = get().calcSectionsWidth();

      set((state) => ({
        wardrobe: { ...state.wardrobe, width: widthValue },
        sections: {
          ...state.sections,
          width: newModuleWidth,
        },
      }));
      get().updateViewportPX();
    },

    /* SECTIONS */
    // Helpers function for sections
    calcSectionsWidth: (sectionsNum = get().sections.count) => {
      const { wardrobe } = get();
      const standsThickness = (sectionsNum + 1) * wardrobe.thickness;

      return (wardrobe.width - standsThickness) / sectionsNum;
    },

    // Set sections count
    setSectionsCount: (sectionsCount) => {
      const newModuleWidth = get().calcSectionsWidth(sectionsCount);

      set((state) => ({
        sections: {
          ...state.sections,
          width: newModuleWidth,
          count: sectionsCount,
        },
      }));
    },

    // Set sections type
    setSectionsType: (id, sectionType) =>
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
