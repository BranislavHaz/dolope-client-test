const filterProductsByType = (array, state) => {
  return array
    .map((item) => {
      if (item.materialType === "wood") {
        return state.productsAPI.dtd10.find(
          (product) => product.id === item.decorId
        );
      } else if (item.materialType === "glass") {
        return state.productsAPI.glass.find(
          (product) => product.id === item.decorId
        );
      }
    })
    .filter((product) => product !== undefined);
};

export const getUniqueDecors = ({ state }) => {
  const allDecors = [];

  Object.values(state.doors.typeDoors).forEach((door) => {
    Object.values(door.sections).forEach((section) => {
      if (section.decorId && section.decorId > 0) {
        allDecors.push({
          decorId: section.decorId,
          materialType: section.materialType,
        });
      }
    });
  });

  const allUniqueDecors = [...new Set(allDecors.map((decor) => decor.decorId))];

  const filteredDecorsByType = filterProductsByType(
    allUniqueDecors.map((decorId) => {
      return {
        decorId,
        materialType: allDecors.find((decor) => decor.decorId === decorId)
          .materialType,
      };
    }),
    state
  );

  return filteredDecorsByType;
};
