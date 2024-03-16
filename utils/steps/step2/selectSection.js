export const selectSection = (state, sectionType, variableHeight = false) => {
  const setTypeOfSections = state.setTypeOfSections;
  const sectionId = state.activeFilter.sections;

  setTypeOfSections({ sectionId, sectionType, variableHeight });
};
