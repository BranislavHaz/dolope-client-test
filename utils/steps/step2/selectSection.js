import { nextStepFilterBox } from "./nextStepFilterBox";

export const selectSection = (state, sectionType, variableHeight = false) => {
  const setTypeOfSections = state.setTypeOfSections;
  const sectionId = state.activeFilter.sections;

  nextStepFilterBox({ state, type: "sections" });

  setTypeOfSections({ sectionId, sectionType, variableHeight });
};
