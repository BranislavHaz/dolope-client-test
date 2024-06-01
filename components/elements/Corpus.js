import React from "react";
import useMainStore from "@/stores/useMainStore";
import * as $ from "@/styles/components/elements/Corpus.styled";

import Stand from "@/components/elements/Stand";
import ModuleEmpty from "@/components/modules/ModuleEmpty";
import Module1 from "@/components/modules/Module1";
import Module2 from "@/components/modules/Module2";
import Module3 from "@/components/modules/Module3";
import Module4 from "@/components/modules/Module4";
import Module5 from "@/components/modules/Module5";
import Module6 from "@/components/modules/Module6";
import Module7 from "@/components/modules/Module7";
import Module8 from "@/components/modules/Module8";
import Module9 from "@/components/modules/Module9";
import Module10 from "@/components/modules/Module10";
import Module11 from "@/components/modules/Module11";
import Module12 from "@/components/modules/Module12";
import Module13 from "@/components/modules/Module13";
import Module14 from "@/components/modules/Module14";
import Module15 from "@/components/modules/Module15";
import Module16 from "@/components/modules/Module16";
import Module17 from "@/components/modules/Module17";
import Module18 from "@/components/modules/Module18";
import Module19 from "@/components/modules/Module19";
import Module20 from "@/components/modules/Module20";
import Module21 from "@/components/modules/Module21";
import Module22 from "@/components/modules/Module22";
import Module23 from "@/components/modules/Module23";
import Module24 from "@/components/modules/Module24";
import Module25 from "@/components/modules/Module25";
import Module26 from "@/components/modules/Module26";
import Module27 from "@/components/modules/Module27";
import Module28 from "@/components/modules/Module28";
import Module29 from "@/components/modules/Module29";
import Module30 from "@/components/modules/Module30";
import Module31 from "@/components/modules/Module31";
import Module32 from "@/components/modules/Module32";
import Module33 from "@/components/modules/Module33";
import Module34 from "@/components/modules/Module34";
import Module35 from "@/components/modules/Module35";
import Module36 from "@/components/modules/Module36";
import Module37 from "@/components/modules/Module37";
import Module38 from "@/components/modules/Module38";
import Module39 from "@/components/modules/Module39";

const modulesMap = {
  0: ModuleEmpty,
  1: Module1,
  2: Module2,
  3: Module3,
  4: Module4,
  5: Module5,
  6: Module6,
  7: Module7,
  8: Module8,
  9: Module9,
  10: Module10,
  11: Module11,
  12: Module12,
  13: Module13,
  14: Module14,
  15: Module15,
  16: Module16,
  17: Module17,
  18: Module18,
  19: Module19,
  20: Module20,
  21: Module21,
  22: Module22,
  23: Module23,
  24: Module24,
  25: Module25,
  26: Module26,
  27: Module27,
  28: Module28,
  29: Module29,
  30: Module30,
  31: Module31,
  32: Module32,
  33: Module33,
  34: Module34,
  35: Module35,
  36: Module36,
  37: Module37,
  38: Module38,
  39: Module39,
};

const Corpus = () => {
  const { wardrobe, sections, viewport, viewportSizes } = useMainStore(
    (state) => ({
      wardrobe: state.wardrobe,
      sections: state.sections,
      viewport: state.viewport,
      viewportSizes: state.viewportSizes,
    })
  );

  const getModule = (sectionId) => {
    const sectionData = sections.typeOfSections[sectionId];
    let moduleId = 0;
    let variableHeightReal = false;
    let variableHeightDisplay = false;

    if (sectionData && sectionData.sectionType !== undefined) {
      moduleId = sectionData.sectionType;
      variableHeightReal = sectionData.variableHeight;
      variableHeightDisplay =
        Math.round(sectionData.variableHeight * viewport.px * 100) / 100;
    }

    const Modul = modulesMap[moduleId];
    return (
      <Modul
        key={Math.random()}
        variableHeightDisplay={variableHeightDisplay}
        variableHeightReal={variableHeightReal}
      />
    );
  };

  const getSections = () => {
    const sectionsArray = [];
    for (let i = 1; i <= sections.count; i++) {
      sectionsArray.push(getModule(i), <Stand key={i} />);
    }
    return sectionsArray;
  };

  const leftOffset =
    wardrobe.type < 3 ? 0 : viewportSizes.wardrobe.thicknessDTD;

  return (
    <$.Corpus $leftOffsetSize={leftOffset}>
      <Stand />
      {getSections()}
    </$.Corpus>
  );
};

export default Corpus;
