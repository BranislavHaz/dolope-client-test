import React from "react";
import { getDecorUrl } from "@/utils/getDecorUrl";
import useMainStore from "@/stores/useMainStore";

import * as $ from "@/styles/components/elements/Drawers.styled";

const Drawers = ({ numOfDrawers }) => {
  const { state, sections, viewport, drawers } = useMainStore((state) => ({
    state: state,
    sections: state.sections,
    viewport: state.viewport,
    drawers: state.drawers,
  }));

  const { px } = viewport;
  const decorUrl = getDecorUrl({ state, type: "corpus" });

  const frontWidthReal =
    sections.width - 2 * drawers.grooveWidth - 2 * drawers.frontGap;
  const frontWidth = sections.width - 2 * drawers.grooveWidth;

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
        $thicknessDTD={px * viewport.thickness}
        $frontWidth={px * frontWidth}
        $frontHeight={px * drawers.frontHeight}
        $grooveWidth={px * drawers.grooveWidth}
        $gripGap={px * drawers.gripGap}
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
