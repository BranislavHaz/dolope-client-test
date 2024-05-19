import React, { useState } from "react";
import { selectSection } from "@/utils/steps/step2/selectSection";
import {
  getVariableHeights,
  getInputErrs,
} from "@/utils/steps/step2/getDefaultStates";
import useMainStore from "@/stores/useMainStore";
import SpaceModal from "@/components/modules/modal/elements/SpaceModal";
import VariableSpaceModal from "@/components/modules/modal/elements/VariableSpaceModal";
import DrawersModal from "@/components/modules/modal/elements/DrawersModal";

import * as $ from "@/styles/components/modules/modal/Module.styled";

const VariableDrawerModule = ({
  countDrawers,
  countShelfs,
  countSpaces,
  bottomShelf,
  id,
}) => {
  const { state, viewport, wardrobe, corpus, drawers, currentSection } =
    useMainStore((state) => ({
      state: state,
      viewport: state.viewport,
      wardrobe: state.wardrobe,
      corpus: state.corpus,
      drawers: state.drawers,
      currentSection: state.activeFilter.sections,
    }));

  const [variableHeight, setVariableHeight] = useState(
    getVariableHeights(state, id)
  );
  const [inputErr, setInputErr] = useState(getInputErrs(state));
  const minShelfSpace = 200; // minimálna hodnota pre priestor na policu

  const sectionHeightDisplay = viewport.height * 0.3; // 30vh má SectionType v TypeSections.styled
  const sectionHeightReal = corpus.height;
  const drawersHeightDisplay = (sectionHeightDisplay / 10) * countDrawers;
  const drawersHeightReal = drawers.heightOfDrawers[countDrawers];
  const bottomShelfHeightDisplay = (sectionHeightDisplay / 10) * 2.5;
  const shelfThicknessDisplay = 3; // 3px je šírka police v Module.styled

  const calcHeightSpace = () => {
    return (
      (sectionHeightReal -
        drawersHeightReal -
        variableHeight[currentSection] * 10 -
        countShelfs * wardrobe.thickness) /
      countSpaces /
      10
    );
  };

  const calcMinMaxHeight = () => {
    const minValue = minShelfSpace / 10;
    const maxValue = Math.floor(
      (sectionHeightReal -
        drawersHeightReal -
        countShelfs * wardrobe.thickness -
        minShelfSpace * countSpaces) /
        10
    );
    return { minValue, maxValue };
  };

  const displayHeight =
    (sectionHeightDisplay -
      drawersHeightDisplay -
      (bottomShelf && bottomShelfHeightDisplay) -
      shelfThicknessDisplay * countShelfs) /
    countSpaces;

  const generateModule = () => {
    const heightSpace = +calcHeightSpace().toFixed(1);
    const moduleArr = [];

    for (let i = 1; i <= countSpaces; i++) {
      moduleArr.push(
        <React.Fragment key={i}>
          <$.Self />
          <SpaceModal
            displayHeight={displayHeight}
            realHeight={heightSpace}
            isError={inputErr[currentSection]}
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
        <VariableSpaceModal
          displayHeight={bottomShelfHeightDisplay}
          realHeight={variableHeight[currentSection]}
          setVariableHeight={setVariableHeight}
          minMaxHeight={calcMinMaxHeight}
          inputErr={inputErr[currentSection]}
          setInputErr={setInputErr}
        />
      );

    return <$.ModuleWrap>{moduleArr}</$.ModuleWrap>;
  };

  const handleClick = () => {
    const realHeight = Number(variableHeight[currentSection]) * 10;
    if (variableHeight[currentSection] && !inputErr[currentSection]) {
      selectSection(state, id, realHeight);
    }
  };

  return (
    <$.Wrap onClick={() => handleClick()}>
      <$.Stand />
      {generateModule()}
      <$.Stand />
    </$.Wrap>
  );
};

export default VariableDrawerModule;
