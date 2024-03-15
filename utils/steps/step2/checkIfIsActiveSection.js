export const checkIfIsActiveSection = (state, sectionId) => {
  const currentActiveSection = state?.activeFilter?.sections;
  const activeSectionType = state?.sections?.typeOfSections[
    currentActiveSection
  ]
    ? state.sections.typeOfSections[currentActiveSection].sectionType
    : 0;
  return sectionId === activeSectionType;
};
