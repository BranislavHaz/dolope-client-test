export const calcViewportSizes = (state) => {
  const { px } = state.viewport;

  // Start Corpus
  const heightCorpus = Math.round(state.corpus.height * px * 100) / 100;
  // End Corpus

  // Start Section
  const widthSection = Math.round(state.sections.width * px * 100) / 100;
  // End Section

  // Start Wardrobe
  const countSideWallsCover = state.sideWalls.cover.count;
  const countStands = state.sections.count + 1;
  const countSections = state.sections.count;

  const thicknessDTD =
    state.wardrobe.thickness * px <= 3 ? 3 : state.wardrobe.thickness * px;
  const widthWardrobe =
    Math.round(
      (countSideWallsCover * thicknessDTD +
        countStands * thicknessDTD +
        countSections * widthSection) *
        100
    ) / 100;
  const heightWardrobe = Math.round(state.wardrobe.height * px * 100) / 100;
  // End Wardrobe

  // Start Drawers
  const frontHeight = Math.round(state.drawers.frontHeight * px * 100) / 100;
  const grooveWidth = Math.round(state.drawers.grooveWidth * px * 100) / 100;
  const gripGap = Math.round(state.drawers.gripGap * px * 100) / 100;
  const frontGap = Math.round(state.drawers.frontGap * px * 100) / 100;
  const frontWidth =
    Math.round(
      (state.sections.width - 2 * state.drawers.grooveWidth) * px * 100
    ) / 100;
  const drawersHeight = {
    1: gripGap + frontHeight + 2 * thicknessDTD,
    2: 2 * (gripGap + frontHeight + thicknessDTD),
    3: 3 * (gripGap + frontHeight) + 2 * thicknessDTD,
    4: 4 * (gripGap + frontHeight) + 2 * thicknessDTD,
  };
  // End Drawers

  // Start Rails
  const rawHeightTopRail =
    Math.round(state.rails.heightTop * thicknessDTD * 100) / 100;
  const rawHeightBottomRail =
    Math.round(state.rails.heightBottom * thicknessDTD * 100) / 100;

  const heightTopRail = rawHeightTopRail >= 2 ? rawHeightTopRail : 2;
  const heightBottomRail = rawHeightBottomRail >= 2 ? rawHeightBottomRail : 2;
  const widthRail = widthWardrobe - 2 * thicknessDTD;
  // End Rails

  // Start Door
  const heightDoorProfile = thicknessDTD * 2;
  const widthDoor =
    Math.round(
      ((widthWardrobe -
        2 * thicknessDTD +
        (state.doors.count - 1) * heightDoorProfile) /
        state.doors.count) *
        100
    ) / 100;
  const heightDoor = Math.round((heightWardrobe - thicknessDTD) * 100) / 100;
  // End Door

  // Start Modal - sections & doors
  let modalElWidth = 0;

  if (state.viewport.width > 0 && state.viewport.width < 768) {
    modalElWidth = state.viewport.width * 0.27;
  } else if (state.viewport.width >= 768 && state.viewport.width < 960) {
    modalElWidth = 95;
  } else {
    modalElWidth = 120;
  }

  const modalElHeight = modalElWidth * 2.5;
  // End Modal

  return {
    wardrobe: {
      width: widthWardrobe,
      height: heightWardrobe,
      thicknessDTD,
    },
    corpus: {
      height: heightCorpus,
    },
    section: {
      width: widthSection,
    },
    drawers: {
      frontWidth,
      frontHeight,
      grooveWidth,
      gripGap,
      frontGap,
      height: drawersHeight,
    },
    rails: {
      top: {
        width: widthRail,
        height: heightTopRail,
      },
      bottom: {
        width: widthRail,
        height: heightBottomRail,
      },
    },
    door: {
      width: widthDoor,
      height: heightDoor,
      profileHeight: heightDoorProfile,
    },
    modal: {
      elWidth: modalElWidth,
      elHeight: modalElHeight,
    },
  };
};
