const createStepsSlice = (set, get) => ({
  currentStep: { id: 1, isFilled: false },
  setCurrentStepId: (newId) => {
    set(
      (state) => {
        state.currentStep.id = newId;
      },
      false,
      "steps/setCurrentStepId"
    );
  },
  setCurrentStepIsFilled: (value) => {
    set(
      (state) => {
        state.currentStep.isFilled = value;
      },
      false,
      "steps/setCurrentStepIsFilled"
    );
  },
});

export default createStepsSlice;
