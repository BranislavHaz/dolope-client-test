import React, { useState, useEffect } from "react";
import useMainStore from "@/stores/useMainStore";

import SpaceModal from "./elements/SpaceModal";
import DrawersModal from "./elements/DrawersModal";

import * as $ from "@/styles/components/modules/modal/Module.styled";

const HangerModule = ({
  countSelf,
  countSpaces,
  countDrawers,
  countHangers = 1,
  positionSelf,
  bottomShelf,
}) => {
  const { viewport, wardrobe, corpus, drawers } = useMainStore((state) => ({
    viewport: state.viewport,
    wardrobe: state.wardrobe,
    corpus: state.corpus,
    drawers: state.drawers,
  }));

  useEffect(() => {
    getHangers();
  }, []);

  const sectionHeightDisplay = viewport.height * 0.3; // 30vh má SectionType v TypeSections.styled
  const sectionHeightReal = corpus.height;

  const [heightHanger, setHeightHanger] = useState({
    display: (1000 * sectionHeightDisplay) / sectionHeightReal,
    real: 1000,
  });

  const bottomShelfHeightDisplay = heightHanger.display * 0.3;
  const bottomShelfHeightReal = 300; // fixna výška spodnej police
  const drawersHeightDisplay = (sectionHeightDisplay / 10) * countDrawers;
  const drawersHeightReal = drawers.heightOfDrawers[countDrawers];
  const shelfThicknessDisplay = 3; // 3px je šírka police v Module.styled

  const calcSpace = () => {
    const substractDisplayArr = [heightHanger.display];
    const substractRealArr = [heightHanger.real];

    if (countSelf) {
      substractDisplayArr.push(countSelf * shelfThicknessDisplay);
      substractRealArr.push(countSelf * wardrobe.thickness);
    }

    if (countDrawers) {
      substractDisplayArr.push(countDrawers * drawersHeightDisplay);
      substractRealArr.push(countDrawers * drawersHeightReal);
    }

    if (bottomShelf) {
      substractDisplayArr.push(bottomShelfHeightDisplay);
      substractRealArr.push(bottomShelfHeightReal);
    }

    let displayHeight = sectionHeightDisplay;
    substractDisplayArr.forEach((num) => {
      displayHeight -= num;
    });
    displayHeight = displayHeight / countSpaces;

    let realHeight = sectionHeightReal;
    substractRealArr.forEach((num) => {
      realHeight -= num;
    });
    realHeight = realHeight / countSpaces;

    return { displayHeight, realHeight: Math.round(realHeight) / 10 };
  };

  const getSpaces = () => {
    let displayHeight;
    let realHeight;

    if (countSpaces === 1 && countDrawers) {
      const displayHeightNum =
        sectionHeightDisplay -
        drawersHeightDisplay -
        heightHanger.display -
        countSelf * shelfThicknessDisplay;
      const realHeightNum =
        Math.round(
          sectionHeightReal -
            drawersHeightReal -
            heightHanger.real -
            countSelf * wardrobe.thickness
        ) / 10;
      displayHeight = displayHeightNum;
      realHeight = realHeightNum;
    } else {
      displayHeight = calcSpace().displayHeight;
      realHeight = calcSpace().realHeight;
    }

    const spacesArr = [];

    for (let i = 1; i <= countSpaces; i++) {
      spacesArr.push(
        <React.Fragment key={i}>
          <SpaceModal displayHeight={displayHeight} realHeight={realHeight} />
          {i !== countSpaces && <$.Self />}
        </React.Fragment>
      );
    }
    return spacesArr;
  };

  const getHangers = () => {
    if (!countSpaces) {
      // Spoločná základná logika pre výpočet výšok
      let newHeightHangersDisplay =
        sectionHeightDisplay - countSelf * shelfThicknessDisplay;
      let newHeightHangersReal = corpus.height - countSelf * wardrobe.thickness;

      // Prispôsobenie výpočtu ak sú zásuvky
      if (countDrawers) {
        newHeightHangersDisplay -= drawersHeightDisplay;
        newHeightHangersReal -= drawersHeightReal;
      }

      // Delenie celkovej výšky na počet vešiakov
      countHangers === 1
        ? newHeightHangersDisplay
        : newHeightHangersDisplay / countHangers;
      countHangers === 1
        ? newHeightHangersReal
        : newHeightHangersReal / countHangers;

      // Nastavenie výsledných hodnôt
      setHeightHanger({
        display: newHeightHangersDisplay,
        real: newHeightHangersReal,
      });
    }
  };

  const generateModule = () => {
    const moduleArr = [<$.Self />];
    positionSelf === "top" && moduleArr.push(getSpaces());
    moduleArr.push(
      <>
        {positionSelf === "top" && <$.Self />}
        <$.Hanger $height={heightHanger.display} />
        {countHangers === 2 && <$.Hanger $height={heightHanger.display} />}
        <$.Self />
      </>
    );
    positionSelf === "bottom" && moduleArr.push(getSpaces());
    countDrawers &&
      moduleArr.push(
        <React.Fragment>
          {countSpaces > 0 && <$.Self />}
          <DrawersModal countDrawers={countDrawers} />
          <$.Self />
        </React.Fragment>
      );
    bottomShelf &&
      moduleArr.push(
        <>
          <SpaceModal
            displayHeight={bottomShelfHeightDisplay}
            realHeight={bottomShelfHeightReal / 10}
          />
        </>
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

export default HangerModule;
