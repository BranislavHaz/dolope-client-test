import { partsOfModules } from "@/constants/partsOfModules";
import { calcAreaParts } from "./calcAreaParts";
import { calcAreaDrawers } from "./calcAreaDrawers";
import { calcAreaDrawersBox } from "./calcAreaDrawersBox";

const getTypeOfModules = (sections) => {
  const arrOfSectionsType = [];

  for (let i = 1; i <= sections.count; i++) {
    arrOfSectionsType.push(sections.typeOfSections[i]);
  }

  return arrOfSectionsType;
};

const getPartsOfModules = (arrOfSectionsType) => {
  const parts = {
    shelfs: 0,
    shelfsExcenter: 0,
    countOfDrawers: 0,
    arrOfDrawers: [],
  };

  arrOfSectionsType.forEach((type) => {
    if (partsOfModules[type]) {
      parts.shelfs += partsOfModules[type].shelfs;
      parts.shelfsExcenter += partsOfModules[type].shelfsExcenter;
      parts.countOfDrawers += partsOfModules[type].drawers;
      parts.arrOfDrawers.push(partsOfModules[type].drawers);
    }
  });

  return parts;
};

export const calcAllParts = (state) => {};
