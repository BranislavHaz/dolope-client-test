import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { calcViewportPX } from "@/utils/calcViewportPX";
import { calcCorpusAndSectionsWidth } from "@/utils/calcCorpusAndSectionsWidth";
import { calcAreaParts } from "@/utils/calcAreaParts";

const createStore = (createStoreFn) => {
  const devtoolsEnhancer = devtools(createStoreFn);
  return immer(devtoolsEnhancer);
};

const useWardrobeStore = create(
  createStore((set, get) => ({
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
        depth: 500,
      },
      sideWallsCover: {
        left: false,
        right: false,
        count: 0,
      },
      sideWallsStop: { width: 100, left: true, right: true, count: 1 },
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
      thicknessBottom: 10,
      sinkingBottom: 10,
      grooveWidth: 50,
      frontHeight: 170,
      sideHeight: 140,
      gripGap: 30,
      frontGap: 4,
      dimensionsFromManual: {
        sideBoxToInsideDrawer: 24.5,
        bottomSideDrawerToBottomDrawer: 12,
        backBoxToBackDrawer: 10,
      },
      heightOfDrawers: {
        1: 268,
        2: 468,
        3: 668,
        4: 868,
      },
      slideReserve: 10,
      slideSizes: [250, 300, 350, 400, 450, 500, 550],
    },

    /* VIEWPORT */
    // Helper function for set viewport size

    updateViewportPX: () => {
      set((state) => {
        state.viewport.px = calcViewportPX(state.viewport, state.wardrobe);
      });
    },

    // Set viewport
    setViewport: (updatedViewport) => {
      set((state) => {
        state.viewport.width = updatedViewport.width;
        state.viewport.height = updatedViewport.height;
        state.viewport.px = calcViewportPX(updatedViewport, state.wardrobe);
      });
    },

    /* SECTIONS */
    // Set sections count
    setSectionsCount: (sectionsCount) => {
      set((state) => {
        state.sections.count = sectionsCount;
      });
      set((state) => {
        const { corpusWidth, sectionsWidth } = calcCorpusAndSectionsWidth(
          state.sections,
          state.wardrobe
        );

        state.wardrobe.corpus.width = corpusWidth;
        state.sections.width = sectionsWidth;
      });
    },

    // Set sections type
    setSectionsType: (id, sectionType) =>
      set((state) => {
        state.sections.typeOfSections[id] = sectionType;
      }),

    /* WARDROBE */
    // Set wardrobe width
    setWardrobeWidth: (widthValue) => {
      set((state) => {
        state.wardrobe.width = widthValue;
      });

      set((state) => {
        const { corpusWidth, sectionsWidth } = calcCorpusAndSectionsWidth(
          state.sections,
          state.wardrobe
        );

        state.wardrobe.corpus.width = corpusWidth;
        state.sections.width = sectionsWidth;
      });

      set((state) => {
        calcAreaParts(state);
      });
      get().updateViewportPX();
    },

    // Set wardrobe height
    setWardrobeHeight: (heightValue) => {
      set((state) => {
        state.wardrobe.height = heightValue;
      });
      get().updateViewportPX();
    },

    // Set wardrobe depth
    setWardrobeDepth: (depthValue) => {
      set((state) => {
        state.wardrobe.depth = depthValue;
      });
    },

    // Set wardrobe type
    setWardrobeType: (valueOfType) => {
      set((state) => {
        state.wardrobe.type = valueOfType;
      });

      set((state) => {
        const { corpusWidth, sectionsWidth } = calcCorpusAndSectionsWidth(
          state.sections,
          state.wardrobe
        );

        state.wardrobe.corpus.width = corpusWidth;
        state.sections.width = sectionsWidth;
      });
    },

    // Set wardrobe side walls
    setWardrobeSideWalls: ({ sideWallsCover, sideWallsStop }) => {
      set((state) => {
        state.wardrobe.sideWallsCover = sideWallsCover;
        state.wardrobe.sideWallsStop = {
          ...sideWallsStop,
          width: state.wardrobe.sideWallsStop.width,
        };
      });
    },
  }))
);

export default useWardrobeStore;
