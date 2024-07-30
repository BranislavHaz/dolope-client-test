import React from "react";
import { selectSection } from "@/utils/configurator/steps/step2/selectSection";
import useMainStore from "@/stores/useMainStore";
import SpaceModal from "./elements/SpaceModal";
import DrawersModal from "./elements/DrawersModal";

import * as $ from "@/styles/components/modules/modal/Module.styled";

const DrawerModule = ({
  countDrawers,
  countShelfs,
  countSpaces,
  bottomShelf,
  id,
}) => {
  const { state, viewport, wardrobe, corpus, drawers } = useMainStore(
    (state) => ({
      state: state,
      viewport: state.viewport,
      wardrobe: state.wardrobe,
      corpus: state.corpus,
      drawers: state.drawers,
    })
  );

  const sectionHeightDisplay = state.viewportSizes.modal.elHeight;
  const sectionHeightReal = corpus.height;
  const drawersHeightDisplay = (sectionHeightDisplay / 10) * countDrawers;
  const drawersHeightReal = drawers.heightOfDrawers[countDrawers];
  const bottomShelfHeightDisplay = (sectionHeightDisplay / 10) * 2;
  const shelfThicknessDisplay = 3; // 3px je šírka police v Module.styled

  const calcSpace = () => {
    const realHeight =
      (sectionHeightReal -
        (bottomShelf && 400) -
        wardrobe.thickness * countShelfs -
        drawersHeightReal) /
      countSpaces; // 400mm je fixná výška spodnej police
    const displayHeight =
      (sectionHeightDisplay -
        drawersHeightDisplay -
        (bottomShelf && bottomShelfHeightDisplay) -
        shelfThicknessDisplay * countShelfs) /
      countSpaces;

    return { realHeight: Math.round(realHeight * 10) / 10, displayHeight };
  };

  const generateModule = () => {
    const { realHeight, displayHeight } = calcSpace();
    const realHeightRounded = Math.round(realHeight) / 10;
    const moduleArr = [];

    for (let i = 1; i <= countSpaces; i++) {
      moduleArr.push(
        <React.Fragment key={`space-${i}`}>
          <$.Self />
          <SpaceModal
            displayHeight={displayHeight}
            realHeight={realHeightRounded}
          />
        </React.Fragment>
      );
    }

    moduleArr.push(
      <React.Fragment key="drawers">
        <$.Self />
        <DrawersModal countDrawers={countDrawers} />
        <$.Self />
      </React.Fragment>
    );

    bottomShelf &&
      moduleArr.push(
        <SpaceModal displayHeight={bottomShelfHeightDisplay} realHeight={40} />
      );

    return <$.ModuleWrap>{moduleArr}</$.ModuleWrap>;
  };

  return (
    <$.Wrap onClick={() => selectSection(state, id)}>
      <$.Stand />
      {generateModule()}
      <$.Stand />
    </$.Wrap>
  );
};

export default DrawerModule;
