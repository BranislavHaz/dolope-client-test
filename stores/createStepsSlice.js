const createStepsSlice = (set, get) => ({
  currentStep: {
    id: 1,
    isFilledFirstStep: {
      dimensions: false,
      type: false,
      countSectionDoor: false,
    },
    isFilled: false,
  },

  stepsInputs: {
    sizeWardrobe: false,
    typeWardrobe: false,
    countSections: false,
    countDoors: false,
  },

  setStepsInputs: (type, status) => {
    set(
      (state) => {
        state.stepsInputs[type] = status;
      },
      false,
      "statusInput/setStatusInput"
    );
  },

  setCurrentStepId: (newId) => {
    set(
      (state) => {
        state.currentStep.id = newId;
      },
      false,
      "steps/setCurrentStepId"
    );
  },
  setCurrentStepIsFilled: (value, key) => {
    set(
      (state) => {
        if (state.currentStep.id > 1) {
          state.currentStep.isFilled = value;
        } else if (state.currentStep.isFilledFirstStep.hasOwnProperty(key)) {
          state.currentStep.isFilledFirstStep[key] = value;
        }
      },
      false,
      "steps/setCurrentStepIsFilled"
    );
  },
});

export default createStepsSlice;
