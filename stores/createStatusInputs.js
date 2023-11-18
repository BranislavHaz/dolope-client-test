const createStatusInputs = (set, get) => ({
  statusInput: {
    sizeWardrobe: false,
  },

  setStatusInputs: (type, status) => {
    set(
      (state) => {
        state.statusInput[type] = status;
      },
      false,
      "statusInput/setStatusInput"
    );
  },
});

export default createStatusInputs;
