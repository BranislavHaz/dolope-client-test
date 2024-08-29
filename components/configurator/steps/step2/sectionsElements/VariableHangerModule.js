import React, { useState } from "react";
import { selectSection } from "@/utils/configurator/steps/step2/selectSection";
import {
  getVariableHeights,
  getInputErrs,
} from "@/utils/configurator/steps/step2/getDefaultStates";
import useMainStore from "@/stores/useMainStore";

import SpaceModal from "@/components/configurator/modules/modal/elements/SpaceModal";
import VariableHangerModal from "@/components/configurator/modules/modal/elements/VariableHangerModal";
import DrawersModal from "@/components/configurator/modules/modal/elements/DrawersModal";

import * as $ from "@/styles/configurator/components/modules/modal/Module.styled";

const VariableHangerModule = ({
  countShelfs,
  countSpaces,
  countDrawers,
  positionSelf,
  bottomSpace,
  bottomShelf = false,
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

  const sectionHeightDisplay = state.viewportSizes.modal.elHeight;
  const sectionHeightReal = corpus.height;
  const shelfThicknessDisplay = 3; // 3px je šírka police v Module.styled
  const minShelfSpace = 200; // minimálna hodnota pre priestor na policu
  const minHangerSpace = 500; // minimálna hodnota pre priestor na vešiak

  const hangerHeightDisplay = sectionHeightDisplay / 2.5;
  const hangerHeightReal = variableHeight[currentSection] * 10; // v mm
  const drawersHeightDisplay = (sectionHeightDisplay / 10) * countDrawers || 0;
  const drawersHeightReal = drawers.heightOfDrawers[countDrawers] || 0;
  const shelfsHeightDisplay = shelfThicknessDisplay * countShelfs;
  const shelfsHeightReal = countShelfs * wardrobe.thickness;
  const spacesCount = countSpaces + (bottomSpace ? 1 : 0);

  const calcMinMaxHeight = () => {
    const minValue = minHangerSpace / 10;
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
          <React.Fragment key={`top-space-${i}`}>
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
      <React.Fragment key="hanger">
        <$.Self />
        <VariableHangerModal
          displayHeight={hangerHeightDisplay}
          realHeight={variableHeight[currentSection]}
          setVariableHeight={setVariableHeight}
          minMaxHeight={calcMinMaxHeight}
          inputErr={inputErr[currentSection]}
          setInputErr={setInputErr}
        />
      </React.Fragment>
    );

    if (positionSelf === "bottom") {
      for (let i = 1; i <= countSpaces; i++) {
        moduleArr.push(
          <React.Fragment key={`bottom-space-${i}`}>
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

    if (bottomSpace && positionSelf === "top") {
      moduleArr.push(
        <React.Fragment key="bottomSpace1">
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
        <React.Fragment key="drawers1">
          <$.Self />
          <DrawersModal countDrawers={countDrawers} />
          <$.Self />
        </React.Fragment>
      );
    }

    if (bottomSpace && positionSelf === "bottom") {
      moduleArr.push(
        <React.Fragment key="bottomSpace2">
          <SpaceModal
            displayHeight={displayHeight}
            realHeight={heightSpace}
            isError={inputErr[currentSection]}
          />
        </React.Fragment>
      );
    }

    if (bottomShelf) {
      moduleArr.push(<$.Self key="drawers2" />);
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
      {process.env.NODE_ENV === "development" && <$.ModuleId>{id}</$.ModuleId>}
      <$.Stand />
      {generateModule()}
      <$.Stand />
    </$.Wrap>
  );
};

export default VariableHangerModule;
