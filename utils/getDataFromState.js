export const getDataFromState = (state) => {
  const { wardrobe, corpus, sideWalls } = state;
  const sections = {
    count: state.sections.count,
    typeSections: state.sections.typeOfSections,
  };
  const drawers = {
    slideSize: state.drawers.slideSize,
    type: state.drawers.type,
  };
  const doors = {
    count: state.doors.count,
    profile: { ...state.doors.selectedProfile },
    typeDoors: state.doors.typeDoors,
  };
  return { wardrobe, corpus, sideWalls, sections, drawers, doors };
};
