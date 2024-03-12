import React, { useState } from "react";
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
}) => {
  const { viewport, wardrobe, corpus, drawers } = useMainStore((state) => ({
    viewport: state.viewport,
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    drawers: state.drawers,
  }));

  const [variableHeight, setVariableHeight] = useState(undefined);
  const [inputErr, setInputErr] = useState(null);

  const sectionHeightDisplay = viewport.height * 0.3; // 30vh má SectionType v TypeSections.styled
  const sectionHeightReal = corpus.height;
  const shelfThicknessDisplay = 3; // 3px je šírka police v Module.styled
  const minShelfSpace = 200; // minimálna hodnota pre priestor na policu

  const hangerHeightDisplay = sectionHeightDisplay / 2.5;
  const hangerHeightReal = variableHeight * 10; // v mm
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
    const heightSpace = Math.floor(calcHangerHeightSpace() * 100) / 100;
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
              isError={inputErr}
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
          realHeight={variableHeight}
          setVariableHeight={setVariableHeight}
          minMaxHeight={calcMinMaxHeight}
          inputErr={inputErr}
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
              isError={inputErr}
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
            isError={inputErr}
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

  return (
    <$.Wrap>
      <$.Stand />
      {generateModule()}
      <$.Stand />
    </$.Wrap>
  );
};

export default VariableHangerModule;
