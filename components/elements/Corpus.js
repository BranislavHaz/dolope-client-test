import React from "react";
import useWardrobeStore from "@/stores/wardrobeStore";
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

const modulesMap = {
  1: Module1,
  2: Module2,
  3: Module3,
  4: Module4,
  5: Module5,
  6: Module6,
  7: Module7,
};

const Corpus = () => {
  const { sections } = useWardrobeStore((state) => ({
    sections: state.sections,
  }));

  const getModule = (sectionId) => {
    const moduleId = sections.typeOfSections[sectionId];
    const Modul = modulesMap[moduleId];

    if (moduleId === 0) {
      return <ModuleEmpty key={Math.random()} />;
    }
    return <Modul key={Math.random()} />;
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
