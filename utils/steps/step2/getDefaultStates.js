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

  for (let i = 0; i < countSections; i++) {
    inputErrs = {
      ...inputErrs,
      [i]: false,
    };
  }

  return inputErrs;
};
