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
};

const Corpus = () => {
  const { sections } = useMainStore((state) => ({
    sections: state.sections,
  }));

  const getModule = (sectionId) => {
    const sectionData = sections.typeOfSections[sectionId];
    let moduleId = 0;
    let variableHeight = false;

    if (sectionData && sectionData.sectionType !== undefined) {
      moduleId = sectionData.sectionType;
      variableHeight = sectionData.variableHeight;
    }

    const Modul = modulesMap[moduleId];
    return <Modul key={Math.random()} variableHeight={variableHeight} />;
  };

  const getSections = () => {
    const sectionsArray = [];
    for (let i = 1; i <= sections.count; i++) {
      const isLastSection = i === sections.count ? true : false;
      sectionsArray.push(
        getModule(i),
        <Stand key={i} location={isLastSection ? "right" : "inside"} />
      );
    }
    return sectionsArray;
  };

  return (
    <$.Corpus>
      <Stand location="left" />
      {getSections()}
    </$.Corpus>
  );
};

export default Corpus;
