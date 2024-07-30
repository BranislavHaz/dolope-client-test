export const checkDoorsSectionsFilled = (typeDoors) => {
  // Získanie celkového počtu sekcií
  const totalCountSections = Object.values(typeDoors).reduce(
    (acc, typeDoor) => {
      return acc + Object.keys(typeDoor.sections).length;
    },
    0
  );

  // Získanie počtu sekcií s platným decorId väčším ako 0
  const totalSelectedSections = Object.values(typeDoors).reduce(
    (acc, typeDoor) => {
      const count = Object.values(typeDoor.sections).reduce(
        (sectionAcc, section) => {
          if (section.decorId && section.decorId > 0) {
            return sectionAcc + 1;
          }
          return sectionAcc;
        },
        0
      );
      return acc + count;
    },
    0
  );

  return totalCountSections === totalSelectedSections ? true : false;
};
