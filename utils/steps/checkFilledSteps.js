export const chceckFilledSteps = (stepId, state) => {
  const { stepsInputs } = state;

  switch (stepId) {
    case 1:
      if (
        stepsInputs.step1.sizeWardrobe &&
        stepsInputs.step1.typeWardrobe &&
        stepsInputs.step1.countSections &&
        stepsInputs.step1.countDoors
      ) {
        return true;
      }
      return false;

    default:
      break;
  }
};
