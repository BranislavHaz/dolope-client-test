export const getDecorUrl = ({
  state,
  type,
  doorId = false,
  doorSectionId = false,
}) => {
  if (type === "corpus" || type === "sideWalls") {
    const decorId = state[type].decorId || null;
    if (decorId) {
      const decor = state.productsAPI.dtd18.find(
        (decor) => decor.id === decorId
      );
      return `/images/decors/${decor.id_manufacturer}.jpeg`;
    } else {
      return false;
    }
  } else if (type === "door") {
    const decorId =
      state.doors.typeDoors[doorId].sections[doorSectionId].decorId || null;
    if (decorId) {
      const decor = state.productsAPI.dtd10.find(
        (decor) => decor.id === decorId
      );
      return `/images/decors/${decor.id_manufacturer}.jpeg`;
    } else {
      return null;
    }
  } else {
    return false;
  }
};
