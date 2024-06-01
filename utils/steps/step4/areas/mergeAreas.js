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
  const tableSize = 5.796; // plocha 1 tabule

  const areas = {};

  // Funkcia na pridanie alebo aktualizáciu hodnot v objekte areas
  const addAreas = (material) => {
    for (const decorId in material) {
      if (areas.hasOwnProperty(decorId)) {
        areas[decorId] = {
          area: areas[decorId].area + parseFloat(material[decorId].area),
          type: material[decorId].type,
        };
      } else {
        areas[decorId] = {
          area: parseFloat(material[decorId].area),
          type: material[decorId].type,
        };
      }
    }
  };

  // Pridanie plochy z každej funkcie do objektu areas
  addAreas(sideWalls);
  addAreas(stands);
  addAreas(shelfs);
  addAreas(drawers);
  addAreas(doors);

  const changeMaterialToFullBoard = (materials) => {
    for (const decorId in materials) {
      if (materials[decorId].type === "wood") {
        materials[decorId].area =
          Math.ceil(materials[decorId].area / tableSize) * tableSize;
      }
    }
  };

  changeMaterialToFullBoard(areas);

  return areas;
};
