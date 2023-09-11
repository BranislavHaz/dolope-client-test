import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useWardrobeStore = create(
  devtools((set, get) => ({
    viewport: { width: 0, height: 0, px: 0.1, thickness: 34 },
    wardrobe: {
      width: 2865,
      height: 2603,
      depth: 600,
      thickness: 18,
      type: 1,
      corpus: {
        width: 2865,
        height: 2300,
        depth: 600,
      },
      sideWallsCover: {
        left: false,
        right: false,
        coutn: 0,
      },
      sideWallsStop: { left: true, right: true, count: 1 },
    },
    rails: {
      heightTop: 40,
      heightBottom: 9,
    },

    sections: {
      width: 931,
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
        1: 268,
        2: 468,
        3: 668,
        4: 868,
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
    setViewport: (updatedViewport) => {
      set((state) => ({
        viewport: {
          ...state.viewport,
          ...updatedViewport,
        },
      }));
      get().updateViewportPX();
    },

    /* SECTIONS */
    // Helpers function for sections
    calcSectionsWidth: (sectionsNum = get().sections.count) => {
      const { wardrobe } = get();
      const standsThickness = (sectionsNum + 1) * wardrobe.thickness;

      return (wardrobe.corpus.width - standsThickness) / sectionsNum;
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

    /* WARDROBE */
    // Set wardrobe width
    setWardrobeWidth: (widthValue) => {
      const newWidth = +widthValue;

      const getCorpusWidth = () => {
        const wardrobe = get().wardrobe;

        if (wardrobe.type === 2 || wardrobe.type === 3) {
          return newWidth - wardrobe.thickness;
        } else if (wardrobe.type === 4) {
          return newWidth - 2 * wardrobe.thickness;
        } else {
          return newWidth;
        }
      };

      set((state) => ({
        wardrobe: {
          ...state.wardrobe,
          width: newWidth,
          corpus: { ...state.wardrobe.corpus, width: getCorpusWidth() },
        },
      }));

      const newSectionsWidth = get().calcSectionsWidth();

      set((state) => ({
        sections: {
          ...state.sections,
          width: newSectionsWidth,
        },
      }));

      get().updateViewportPX();
    },

    // Set wardrobe height
    setWardrobeHeight: (heightValue) => {
      set((state) => ({
        wardrobe: {
          ...state.wardrobe,
          height: heightValue,
        },
      }));
    },

    // Set wardrobe depth
    setWardrobeDepth: (depthValue) => {
      set((state) => ({
        wardrobe: {
          ...state.wardrobe,
          depth: depthValue,
        },
      }));
    },

    // Set wardrobe type
    setWardrobeType: (valueOfType) => {
      set((state) => ({
        wardrobe: {
          ...state.wardrobe,
          type: valueOfType,
        },
      }));
    },

    // Set wardrobe side walls
    setWardrobeSideWalls: ({ sideWallsCover, sideWallsStop }) => {
      set((state) => ({
        wardrobe: {
          ...state.wardrobe,
          sideWallsCover,
          sideWallsStop,
        },
      }));
    },
  }))
);

export default useWardrobeStore;
