export const getAreaDoors = (state) => {
  const doors = state.doors;
  const areas = {};

  // Prechádzame všetky typy dverí
  Object.values(doors.typeDoors).forEach((typeDoor) => {
    // Prechádzame všetky sekcie v danom type dverí
    Object.values(typeDoor.sections).forEach((section) => {
      const { width, height, decorId } = section;
      const areaM2 = (width * height) / 1000000; // Prepočet na m2 z mm2

      if (areas.hasOwnProperty(decorId)) {
        // Ak decorId exituje, pripočítame plochu
        areas[decorId] += areaM2;
      } else {
        // Ak je to nový decorId, inicializujeme ho s aktuálnou plochou
        areas[decorId] = areaM2;
      }
    });
  });

  // Formátujeme každú plochu na 3 desatinné miesta
  for (const decorId in areas) {
    areas[decorId] = parseFloat(areas[decorId].toFixed(3));
  }

  return areas;
};
