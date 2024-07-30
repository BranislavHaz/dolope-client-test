import { calcDoorWidth } from "./calcDoorWidth";
import { calcSectionsWidth } from "./calcSectionsWidth";
import { isBasicDataFilled } from "./isBasicDataFilled";

import * as $ from "@/styles/configurator/components/steps/step1/CountSections.styled";

export const generateOptionsOfSections = (state, handleClick) => {
  if (isBasicDataFilled(state)) {
    let minCountSections = Math.floor(
      state.wardrobe.width / state.sections.maxWidth
    );
    const maxCountSections = Math.floor(
      state.wardrobe.width / state.sections.minWidth
    );

    minCountSections =
      minCountSections === 1 ? (minCountSections = 2) : minCountSections;

    const sectionsArr = [];

    for (let i = minCountSections; i <= maxCountSections; i++) {
      const sectionsWidth = calcSectionsWidth(state, i);
      const sectionLabel = `(${sectionsWidth / 10} cm)`;

      sectionsArr.push(
        <$.Select
          key={i}
          value={i}
          onClick={handleClick("sections", i)}
          $isActive={state.sections.count === i}
        >
          {i}
          <$.SelectDimension>{sectionLabel}</$.SelectDimension>
        </$.Select>
      );
    }

    return sectionsArr;
  }
};

export const generateOptionsOfDoors = (state, countOfSections, handleClick) => {
  const m2WeightInKG = 13;
  const profilesWeight = 10;
  const maxLoadOfDoor = 50;
  const { wardrobe } = state;
  const doorsArr = [];

  if (isBasicDataFilled(state)) {
    if (countOfSections % 2 !== 1) {
      const m2SectionArea =
        ((wardrobe.width / countOfSections) * wardrobe.height) / 1000000;

      if (m2SectionArea * m2WeightInKG * 2 + profilesWeight < maxLoadOfDoor) {
        const countOfDoors = countOfSections / 2;
        doorsArr.push(
          <$.Select
            key={1}
            value={countOfDoors}
            onClick={handleClick("doors", countOfDoors)}
            $isActive={state.doors.count === countOfDoors}
          >
            {countOfDoors}
            <$.SelectDimension>
              ({calcDoorWidth(state, countOfSections / 2)} cm)
            </$.SelectDimension>
          </$.Select>
        );
      }
    }

    doorsArr.push(
      <$.Select
        key={2}
        value={countOfSections}
        onClick={handleClick("doors", countOfSections)}
        $isActive={state.doors.count === countOfSections}
      >
        {countOfSections}
        <$.SelectDimension>
          ({calcDoorWidth(state, countOfSections)} cm)
        </$.SelectDimension>
      </$.Select>
    );

    return doorsArr;
  }
};
