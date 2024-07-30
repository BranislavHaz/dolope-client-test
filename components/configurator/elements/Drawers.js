import React from "react";
import { getDecorUrl } from "@/utils/configurator/getDecorUrl";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/configurator/components/elements/Drawers.styled";

const Drawers = ({ numOfDrawers }) => {
  const { state, sections, drawers, viewportSizes } = useMainStore((state) => ({
    state: state,
    sections: state.sections,
    drawers: state.drawers,
    viewportSizes: state.viewportSizes,
  }));

  const decorUrl = getDecorUrl({ state, type: "corpus" });

  const frontWidthReal =
    sections.width - 2 * drawers.grooveWidth - 2 * drawers.frontGap;

  const getDrawerComponents = (key) => (
    <React.Fragment key={key}>
      <$.DrawerSideLeft />
      <$.DrawerGripGap />
      <$.DrawerSideRight />
      <$.DrawerSideLeft />
      <$.DrawerFront />
      <$.DrawerSideRight />
    </React.Fragment>
  );

  const drawersStyledMap = {
    1: $.Drawers1,
    2: $.Drawers2,
    3: $.Drawers3,
    4: $.Drawers4,
  };

  const getDrawers = (numOfDrawers) => {
    const drawersArray = [];

    for (let i = 1; i <= numOfDrawers; i++) {
      drawersArray.push(getDrawerComponents(i));
    }

    const DrawerContainer = drawersStyledMap[numOfDrawers];

    return (
      <DrawerContainer
        $thicknessDTD={viewportSizes.wardrobe.thicknessDTD}
        $frontWidth={viewportSizes.drawers.frontWidth}
        $frontHeight={viewportSizes.drawers.frontHeight}
        $grooveWidth={viewportSizes.drawers.grooveWidth}
        $gripGap={viewportSizes.drawers.gripGap}
        $bgImg={decorUrl}
      >
        <$.DrawerSideLeft />
        <$.DrawerTop />
        <$.DrawerSideRight />
        {drawersArray}
        <$.DrawerSideLeft />
        <$.DrawerBottom />
        <$.DrawerSideRight />
      </DrawerContainer>
    );
  };

  return <>{getDrawers(numOfDrawers)}</>;
};

export default Drawers;
