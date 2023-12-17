import React from "react";
import useMainStore from "@/stores/useMainStore";
import SpaceModal from "./elements/SpaceModal";
import DrawersModal from "./elements/DrawersModal";

import * as $ from "@/styles/components/modules/modal/Module.styled";

const DrawerModule = ({
  countDrawers,
  countShelfs,
  countSpaces,
  bottomShelf,
}) => {
  const { viewport, wardrobe, corpus, sections, drawers } = useMainStore(
    (state) => ({
      viewport: state.viewport,
      wardrobe: state.wardrobe,
      corpus: state.corpus,
      sections: state.sections,
      drawers: state.drawers,
    })
  );

  const sectionHeightDisplay = viewport.height * 0.3; // 30vh má SectionType v TypeSections.styled
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
        <React.Fragment key={i}>
          <$.Self />
          <SpaceModal
            displayHeight={displayHeight}
            realHeight={realHeightRounded}
          />
        </React.Fragment>
      );
    }

    moduleArr.push(
      <>
        <$.Self />
        <DrawersModal countDrawers={countDrawers} />
        <$.Self />
      </>
    );

    bottomShelf &&
      moduleArr.push(
        <SpaceModal displayHeight={bottomShelfHeightDisplay} realHeight={40} />
      );

    return <$.ModuleWrap>{moduleArr}</$.ModuleWrap>;
  };

  return (
    <$.Wrap>
      <$.Stand />
      {generateModule()}
      <$.Stand />
    </$.Wrap>
  );
};

export default DrawerModule;
