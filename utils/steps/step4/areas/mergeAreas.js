import { getAreaSideWalls } from "./getAreaSideWalls";
import { getAreaStands } from "./getAreaStands";
import { getAreaShelfs } from "./getAreaShelfs";
import { getAreaDrawers } from "./getAreaDrawers";
import { getAreaDoors } from "./getAreaDoors";

export const mergeAreas = (state) => {
  // Získanie objektov z každej funkcie
  const sideWalls = getAreaSideWalls(state);
  const stands = getAreaStands(state);
  const shelfs = getAreaShelfs(state);
  const drawers = getAreaDrawers(state);
  const doors = getAreaDoors(state);

  const areas = {};

  // Funkcia na pridanie alebo aktualizáciu hodnot v objekte areas
  const addAreas = (areaObj) => {
    for (const decorId in areaObj) {
      if (areas.hasOwnProperty(decorId)) {
        areas[decorId] += parseFloat(areaObj[decorId]);
      } else {
        areas[decorId] = parseFloat(areaObj[decorId]);
      }
    }
  };

  // Pridanie plochy z každej funkcie do objektu areas
  addAreas(sideWalls);
  addAreas(stands);
  addAreas(shelfs);
  addAreas(drawers);
  addAreas(doors);

  return areas;
};
