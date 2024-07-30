import React from "react";
import { selectSection } from "@/utils/configurator/steps/step2/selectSection";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/modal/Module.styled";

import SpaceModal from "./elements/SpaceModal";

const SelfModule = ({ countSelfs, id, isBottomSelf = false }) => {
  const { state, viewport, wardrobe, corpus } = useMainStore((state) => ({
    state: state,
    viewport: state.viewport,
    wardrobe: state.wardrobe,
    corpus: state.corpus,
  }));

  const countSpace = isBottomSelf ? countSelfs - 1 : countSelfs;

  const calcSpace = () => {
    const sectionHeightDisplay = state.viewportSizes.modal.elHeight;
    const sectionHeightReal = corpus.height;
    const shelfThicknessDisplay = 3; // 3px je šírka police v Module.styled
    const shelfThicknessReal = wardrobe.thickness;

    const displayHeight =
      (sectionHeightDisplay - countSelfs * shelfThicknessDisplay) / countSpace;
    const realHeight =
      (sectionHeightReal - countSelfs * shelfThicknessReal) / countSpace;

    return { displayHeight, realHeight };
  };

  const generateModule = () => {
    const selfsArr = [];
    const { displayHeight, realHeight } = calcSpace();
    const realHeightRounded = Math.round(realHeight) / 10;

    for (let i = 1; i <= countSpace; i++) {
      if (i < countSpace) {
        selfsArr.push(
          <React.Fragment key={i}>
            <$.Self />
            <SpaceModal
              displayHeight={displayHeight}
              realHeight={realHeightRounded}
            />
          </React.Fragment>
        );
      } else {
        if (isBottomSelf) {
          selfsArr.push(
            <React.Fragment key={i}>
              <$.Self />
              <SpaceModal
                displayHeight={displayHeight}
                realHeight={realHeightRounded}
              />
              <$.Self />
            </React.Fragment>
          );
        } else {
          selfsArr.push(
            <React.Fragment key={i}>
              <$.Self />
              <SpaceModal
                displayHeight={displayHeight}
                realHeight={realHeightRounded}
              />
            </React.Fragment>
          );
        }
      }
    }

    return <$.ModuleWrap>{selfsArr}</$.ModuleWrap>;
  };

  return (
    <$.Wrap onClick={() => selectSection(state, id)}>
      <$.Stand />
      {generateModule()}
      <$.Stand />
    </$.Wrap>
  );
};

export default SelfModule;
