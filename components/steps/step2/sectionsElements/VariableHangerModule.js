import React, { useState } from "react";
import { selectSection } from "@/utils/steps/step2/selectSection";
import {
  getVariableHeights,
  getInputErrs,
} from "@/utils/steps/step2/getDefaultStates";
import useMainStore from "@/stores/useMainStore";

import SpaceModal from "@/components/modules/modal/elements/SpaceModal";
import VariableHangerModal from "@/components/modules/modal/elements/VariableHangerModal";
import DrawersModal from "@/components/modules/modal/elements/DrawersModal";

import * as $ from "@/styles/components/modules/modal/Module.styled";

const VariableHangerModule = ({
  countShelfs,
  countSpaces,
  countDrawers,
  positionSelf,
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

  const sectionHeightDisplay = viewport.height * 0.3; // 30vh má SectionType v TypeSections.styled
  const sectionHeightReal = corpus.height;
  const shelfThicknessDisplay = 3; // 3px je šírka police v Module.styled
  const minShelfSpace = 200; // minimálna hodnota pre priestor na policu

  const hangerHeightDisplay = sectionHeightDisplay / 2.5;
  const hangerHeightReal = variableHeight[currentSection] * 10; // v mm
  const drawersHeightDisplay = (sectionHeightDisplay / 10) * countDrawers || 0;
  const drawersHeightReal = drawers.heightOfDrawers[countDrawers] || 0;
  const shelfsHeightDisplay = shelfThicknessDisplay * countShelfs;
  const shelfsHeightReal = countShelfs * wardrobe.thickness;
  const spacesCount = countSpaces + (bottomShelf ? 1 : 0);

  const calcMinMaxHeight = () => {
    const minValue = minShelfSpace / 10;
    const maxValue = Math.floor(
      (sectionHeightReal -
        drawersHeightReal -
        shelfsHeightReal -
        minShelfSpace * spacesCount) /
        10
    );
    return { minValue, maxValue };
  };

  const calcHangerHeightSpace = () => {
    return (
      (sectionHeightReal -
        drawersHeightReal -
        hangerHeightReal -
        shelfsHeightReal) /
      spacesCount /
      10
    );
  };

  const calcHeightSpace = () => {
    return (
      (sectionHeightDisplay -
        hangerHeightDisplay -
        drawersHeightDisplay -
        shelfsHeightDisplay) /
      spacesCount
    );
  };

  const generateModule = () => {
    const heightSpace = +calcHangerHeightSpace().toFixed(1);
    const displayHeight = calcHeightSpace();
    const moduleArr = [];

    if (positionSelf === "top") {
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
    }

    moduleArr.push(
      <>
        <$.Self />
        <VariableHangerModal
          displayHeight={hangerHeightDisplay}
          realHeight={variableHeight[currentSection]}
          setVariableHeight={setVariableHeight}
          minMaxHeight={calcMinMaxHeight}
          inputErr={inputErr[currentSection]}
          setInputErr={setInputErr}
        />
      </>
    );

    if (positionSelf === "bottom") {
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
    }

    if (bottomShelf) {
      moduleArr.push(
        <React.Fragment>
          <$.Self />
          <SpaceModal
            displayHeight={displayHeight}
            realHeight={heightSpace}
            isError={inputErr[currentSection]}
          />
        </React.Fragment>
      );
    }

    if (countDrawers) {
      moduleArr.push(
        <React.Fragment>
          <$.Self />
          <DrawersModal countDrawers={countDrawers} />
          <$.Self />
        </React.Fragment>
      );
    }

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

export default VariableHangerModule;
