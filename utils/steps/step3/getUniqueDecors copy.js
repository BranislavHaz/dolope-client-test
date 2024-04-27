export const getUniqueDecors = ({ state }) => {
  const allDecors = [];

  Object.values(state.doors.typeDoors).forEach((door) => {
    Object.values(door.sections).forEach((section) => {
      if (section.decorId && section.decorId > 0) {
        allDecors.push(section.decorId);
      }
    });
  });

  const allUniqueDecors = [...new Set(allDecors)];

  console.log(allUniqueDecors);

  /*   return state.productsAPI.dtd10.filter((decor) =>
    allUniqueDecors.includes(decor.id)
  ); */

  const all = state.productsAPI.dtd10.filter((decor) =>
    allUniqueDecors.includes(decor.id)
  );

  return all;
  console.log(all);
};
