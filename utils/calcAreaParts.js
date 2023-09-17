import { partsOfModules } from "@/constants/partsOfModules";
import { calcAreaStandsAndSideWalls } from "./calcAreaStandsAndSideWalls";
import { calcAreaDrawers } from "./calcAreaDrawers";
import { calcAreaDrawersBox } from "./calcAreaDrawersBox";

/* const calcNumOfSideWallsParts = (wardrobe) => {
  const { type } = wardrobe;

  if (type === 1) return { numOfSideWallsStop: 2, numOfSideWallsCover: 0 };
  else if (type === 2 || type === 3)
    return { numOfSideWallsStop: 1, numOfSideWallsCover: 1 };
  else return { numOfSideWallsStop: 0, numOfSideWallsCover: 2 };
}; */

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

export const calcAreaParts = (state) => {
  const { wardrobe, sections, drawers } = state;

  /*   const numOfStands = sections.count + 1;
  const { numOfSideWallsStop, numOfSideWallsCover } =
    calcNumOfSideWallsParts(wardrobe); */

  const typeOfModules = getTypeOfModules(sections);
  const partsOfModules = getPartsOfModules(typeOfModules);

  const { standsM2, sideWallsStopM2, sideWallsCoverM2 } =
    calcAreaStandsAndSideWalls(state);

  console.log("standsM2: " + standsM2);
  console.log("sideWallsStopM2: " + sideWallsStopM2);
  console.log("sideWallsCoverM2: " + sideWallsCoverM2);
  console.log("//");

  /*   const { front, frontAndBack, side, bottom, drawersM2, drawersBottomM2 } =
    calcAreaDrawers(state, partsOfModules.countOfDrawers);
  console.log("front: " + front);
  console.log("frontAndBack: " + frontAndBack);
  console.log("side: " + side);
  console.log("bottom: " + bottom);
  console.log("drawersM2 : " + drawersM2);
  console.log("drawersBottomM2 : " + drawersBottomM2);
  console.log("///");

  const { m2 } = calcAreaDrawersBox(state, partsOfModules.arrOfDrawers);
  console.log("m2: " + m2); */
};
