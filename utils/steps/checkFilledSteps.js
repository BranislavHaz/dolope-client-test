export const chceckFilledSteps = (stepId, state) => {
  const { stepsInputs } = state;

  switch (stepId) {
    case 1:
      if (
        stepsInputs.sizeWardrobe &&
        stepsInputs.typeWardrobe &&
        stepsInputs.countSections &&
        stepsInputs.countDoors
      ) {
        return true;
      }
      return false;

    default:
      break;
  }
};
