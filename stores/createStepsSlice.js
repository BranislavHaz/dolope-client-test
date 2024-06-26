const createStepsSlice = (set, get) => ({
  currentStep: {
    id: 1,
  },

  activeFilter: {
    doors: 1,
    sections: 1,
  },

  order: {
    status: "initial",
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
      typeProfiles: false,
    },
    step3: {
      decorCorpus: false,
      decorSideWalls: false,
      decorDoors: false,
    },
  },

  setOrderStatus: (value) => {
    set(
      (state) => {
        state.order.status = value;
      },
      false,
      "steps/setOrderStatus"
    );
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

  setStepsDefaultValues: (nameOfAction) => {
    set(
      (state) => {
        state.stepsInputs = {
          step1: {
            sizeWardrobe: false,
            typeWardrobe: false,
            countSections: false,
            countDoors: false,
          },
          step2: {
            typeDoors: false,
            typeSections: false,
            typeProfiles: false,
          },
          step3: {
            decorCorpus: false,
            decorSideWalls: false,
            decorDoors: false,
          },
        };

        state.activeFilter = {
          doors: 1,
          sections: 1,
        };

        state.currentStep = {
          id: 1,
        };
      },
      false,
      `${nameOfAction}/setStepsDefaultValues`
    );
  },
});

export default createStepsSlice;
