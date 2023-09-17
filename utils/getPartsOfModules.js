import { partsOfModules } from "@/constants/partsOfModules";

const getTypeOfModules = (sections) => {
  const arrOfSectionsType = [];

  for (let i = 1; i <= sections.count; i++) {
    arrOfSectionsType.push(sections.typeOfSections[i]);
  }

  return arrOfSectionsType;
};

const getPartsFromModules = (arrOfSectionsType) => {
  const parts = {
    countOfShelfs: 0,
    countOfShelfsExcenter: 0,
    countOfDrawers: 0,
    arrOfDrawers: [],
  };

  arrOfSectionsType.forEach((type) => {
    if (partsOfModules[type]) {
      parts.countOfShelfs += partsOfModules[type].shelfs;
      parts.countOfShelfsExcenter += partsOfModules[type].shelfsExcenter;
      parts.countOfDrawers += partsOfModules[type].drawers;
      parts.arrOfDrawers.push(partsOfModules[type].drawers);
    }
  });

  return parts;
};

export const getPartsOfModules = (state) => {
  const typeOfModules = getTypeOfModules(state.sections);
  return getPartsFromModules(typeOfModules);
};
