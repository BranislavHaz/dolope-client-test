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
