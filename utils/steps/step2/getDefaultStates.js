export const getVariableHeights = (state, sectionType) => {
  const countSections = state.sections.count;
  let variableHeights = {};

  for (let i = 1; i <= countSections; i++) {
    if (state.sections.typeOfSections?.[i]?.sectionType === sectionType) {
      variableHeights = {
        ...variableHeights,
        [i]: state.sections.typeOfSections[i].variableHeight / 10,
      };
    } else {
      variableHeights = {
        ...variableHeights,
        [i]: undefined,
      };
    }
  }

  return variableHeights;
};

export const getInputErrs = (state) => {
  const countSections = state.sections.count;
  let inputErrs = {};

  for (let i = 1; i <= countSections; i++) {
    inputErrs = {
      ...inputErrs,
      [i]: false,
    };
  }

  return inputErrs;
};

export const getVariableHeightsDoor = (state, typeOfDoor) => {
  const countSections = state.sections.count;
  let variableHeights = {};

  for (let i = 1; i <= countSections; i++) {
    if (state.doors.typeDoors?.[i]?.typeOfDoor === typeOfDoor) {
      variableHeights = {
        ...variableHeights,
        [i]: state.doors.typeDoors[i].variableHeight / 10,
      };
    } else {
      variableHeights = {
        ...variableHeights,
        [i]: "",
      };
    }
  }

  return variableHeights;
};

export const getSpaceHeights = (state, typeOfDoor) => {
  const countSections = state.sections.count;
  let spaceHeights = {};

  for (let i = 1; i <= countSections; i++) {
    if (state.doors.typeDoors?.[i]?.typeOfDoor === typeOfDoor) {
      spaceHeights = {
        ...spaceHeights,
        [i]: state.doors.typeDoors[i].spaceHeight / 10,
      };
    } else {
      spaceHeights = {
        ...spaceHeights,
        [i]: 0,
      };
    }
  }

  return spaceHeights;
};
