const createStepsSlice = (set, get) => ({
  currentStep: {
    id: 1,
  },

  activeFilter: {
    doors: 1,
    sections: 1,
  },

  stepsInputs: {
    step1: {
      sizeWardrobe: false,
      typeWardrobe: false,
      countSections: false,
      countDoors: false,
    },
    step2: {
      typeDoors: false,
      typeSections: false,
    },
  },

  setActiveFilter: (type, id) => {
    set(
      (state) => {
        state.activeFilter[type] = id;
      },
      false,
      "steps/setActiveFilter"
    );
  },

  setStepsInputs: (stepId, type, status) => {
    set(
      (state) => {
        state.stepsInputs[stepId][type] = status;
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
});

export default createStepsSlice;
