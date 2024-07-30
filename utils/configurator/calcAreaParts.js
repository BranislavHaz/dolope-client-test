import { calcAreaStandsAndSideWalls } from "./calcAreaStandsAndSideWalls";
import { calcAreaDrawers } from "./calcAreaDrawers";
import { calcAreaDrawersBox } from "./calcAreaDrawersBox";
import { calcAreaShelfs } from "./calcAreaShelfs";
import { getPartsOfModules } from "./getPartsOfModules";

export const calcAreaParts = (state) => {
  const partsOfModules = getPartsOfModules(state);

  const standsAndSideWallsParts = calcAreaStandsAndSideWalls(state).parts;
  const drawersParts = calcAreaDrawers(state, partsOfModules).parts;
  const drawersBoxParts = calcAreaDrawersBox(state, partsOfModules).parts;
  const shelfsParts = calcAreaShelfs(state, partsOfModules).parts;

  const partsArr = [
    standsAndSideWallsParts,
    drawersParts,
    drawersBoxParts,
    shelfsParts,
  ];

  for (let i = 1; i < partsArr.length; i++) {
    Object.keys(partsArr[i]).forEach((key) => {
      //console.log(key, partsArr[i][key]);
    });
  }
};
