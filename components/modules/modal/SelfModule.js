import React from "react";
import { selectSection } from "@/utils/steps/step2/selectSection";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/modules/modal/Module.styled";

import SpaceModal from "./elements/SpaceModal";

const SelfModule = ({ countSelfs, id }) => {
  const { state, viewport, wardrobe, corpus } = useMainStore((state) => ({
    state: state,
    viewport: state.viewport,
    wardrobe: state.wardrobe,
    corpus: state.corpus,
  }));

  const calcSpace = () => {
    const sectionHeightDisplay = state.viewportSizes.modal.elHeight;
    const sectionHeightReal = corpus.height;
    const shelfThicknessDisplay = 3; // 3px je šírka police v Module.styled
    const shelfThicknessReal = wardrobe.thickness;

    const displayHeight =
      (sectionHeightDisplay - countSelfs * shelfThicknessDisplay) / countSelfs;
    const realHeight =
      (sectionHeightReal - countSelfs * shelfThicknessReal) / countSelfs;

    return { displayHeight, realHeight };
  };

  const generateModule = () => {
    const selfsArr = [];
    const { displayHeight, realHeight } = calcSpace();
    const realHeightRounded = Math.round(realHeight) / 10;

    for (let i = 1; i <= countSelfs; i++) {
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
